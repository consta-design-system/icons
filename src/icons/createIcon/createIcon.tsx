import React, { forwardRef, useContext, useEffect, useMemo } from 'react';

import { cnIcons, IconsContext } from '##/components/IconsProvider';

import { cnIcon, Icon, IconProps } from '../Icon/Icon';

type SizeComponent = React.FC<React.SVGProps<SVGSVGElement>>;
type CreateIconArguments = {
  m: SizeComponent;
  s: SizeComponent;
  xs: SizeComponent;
  name: string;
};

function getSvgBySize(
  size: IconProps['size'] | undefined,
  m: SizeComponent,
  s: SizeComponent,
  xs: SizeComponent,
) {
  switch (size) {
    case 'xs':
      return xs;
    case 's':
      return s;
    case 'm':
      return m;
    default:
      return m;
  }
}

export function createIcon({ m, s, xs, name }: CreateIconArguments) {
  const IconComponent = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const Svg = getSvgBySize(props.size, m, s, xs);

    const { addIcon, removeIcon } = useContext(IconsContext);

    useEffect(() => {
      addIcon?.(name, props.size, Svg);
      return () => removeIcon?.(name, props.size);
    }, []);

    const { children, ...otherProps } = useMemo(() => {
      return Svg({ className: cnIcon('Svg') })?.props;
    }, [Svg]);

    return (
      <Icon
        {...props}
        className={cnIcon(null, [name, props.className])}
        ref={ref}
      >
        {!addIcon ? (
          <Svg className={cnIcon('Svg')} />
        ) : (
          <svg {...otherProps}>
            <use
              x="0"
              y="0"
              xlinkHref={`#${cnIcons(`${name}_${props.size ?? 'm'}`)}`}
            />
          </svg>
        )}
      </Icon>
    );
  });

  return IconComponent;
}
