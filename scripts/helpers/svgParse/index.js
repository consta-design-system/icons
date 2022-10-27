const { dirname } = require('path');
const { readFile, writeFile, ensureDir } = require('fs-extra');
const { transform } = require('@svgr/core');

const svgFillRegexp = /(fill|FILL)=\"[a-zA-Z0-9#_.-]*\"/gm;
const svgCleanFill = (svg) => svg.replace(svgFillRegexp, '');

const svgParse = async ({
  componentName,
  path,
  pathOutdir,
  fileName,
  cleanFill = true,
  svgo = true,
}) => {
  let svg = await readFile(path, 'utf8');
  const hasGradient = svg.includes('linearGradient');
  const color = svg.includes('color:multiple') ? 'multiple' : 'mono';
  const withoutSvgr = svg.includes('withoutSvgr');

  if (cleanFill && color === 'mono') {
    svg = svgCleanFill(svg);
  }

  const jsCode = await transform(
    svg,
    {
      plugins: !withoutSvgr
        ? ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier']
        : ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      typescript: true,
      dimensions: false,
      svgo,
      ...(withoutSvgr
        ? {}
        : {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  prefixIds: {
                    prefix: `Svg${fileName}`,
                  },
                  cleanupIDs: false,
                },
              ],
            },
          }),
    },
    { componentName },
  );

  const jsPatch = `${pathOutdir}/${fileName}.tsx`;
  await ensureDir(dirname(jsPatch));
  await writeFile(jsPatch, jsCode);
  return {
    hasGradient,
    color,
  };
};

module.exports = {
  svgParse,
};
