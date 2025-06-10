import React, { isValidElement, useContext, useEffect, useMemo } from 'react';

import { cnIcons, IconsContext } from '##/components/IconsProvider';

import { CreateIconArguments, renderTypeDefault, SvgProps } from './helpers';

export const createSvg =
  (createProps: CreateIconArguments) => (props: SvgProps) => {
    const { name, renderType = renderTypeDefault } = createProps;

    const { size = 'm', className, ...otherProps } = props;

    const Svg = createProps[size];
    const { addIcon, removeIcon } = useContext(IconsContext);

    const SvgElement = useMemo(() => {
      return renderType[size] === 'use' ? Svg({ className }) : null;
    }, [Svg]);

    const { children: _children, ...svgProps } = isValidElement(SvgElement)
      ? SvgElement?.props || {}
      : {};

    useEffect(() => {
      if (renderType[size] === 'use') {
        addIcon?.(name, size, SvgElement);
      }
    }, [SvgElement, renderType, size]);

    useEffect(() => {
      return () => {
        if (renderType[size] === 'use') {
          removeIcon?.(name, size);
        }
      };
    }, [Svg, renderType, size]);

    if (addIcon && renderType[size] === 'use') {
      return (
        <svg {...otherProps} {...svgProps}>
          <use x="0" y="0" xlinkHref={`#${cnIcons(`${name}_${size}`)}`} />
        </svg>
      );
    }
    return <Svg className={className} />;
  };
