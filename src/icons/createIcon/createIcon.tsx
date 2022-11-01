import React, { forwardRef, useContext, useEffect, useMemo } from 'react';

import { cnIcons, IconsContext } from '##/components/IconsProvider';

import { cnIcon, Icon, IconProps } from '../Icon/Icon';

const renderTypeDefault = {
  l: 'default',
  m: 'default',
  s: 'default',
  xs: 'default',
};

export type CreateIconRenderType = {
  l?: 'use' | 'default';
  m?: 'use' | 'default';
  s?: 'use' | 'default';
  xs?: 'use' | 'default';
};

export type SizeComponent = React.FC<React.SVGProps<SVGSVGElement>>;
export type CreateIconArguments = {
  l: SizeComponent;
  m: SizeComponent;
  s: SizeComponent;
  xs: SizeComponent;
  name: string;
  renderType?: CreateIconRenderType;
  color?: 'mono' | 'multiple';
};

export function createIcon(createProps: CreateIconArguments) {
  const { name, renderType = renderTypeDefault, color = 'mono' } = createProps;
  const IconComponent = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const { size = 'm', className } = props;
    const Svg = createProps[size];
    const { addIcon, removeIcon } = useContext(IconsContext);

    const SvgElement = useMemo(() => {
      return renderType[size] === 'use'
        ? Svg({ className: cnIcon('Svg', { color }) })
        : null;
    }, [Svg]);

    const { children, ...otherProps } = SvgElement?.props ?? {};

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

    return (
      <Icon {...props} className={cnIcon(null, [name, className])} ref={ref}>
        {addIcon && renderType[size] === 'use' ? (
          <svg {...otherProps}>
            <use x="0" y="0" xlinkHref={`#${cnIcons(`${name}_${size}`)}`} />
          </svg>
        ) : (
          <Svg className={cnIcon('Svg', { color })} />
        )}
      </Icon>
    );
  });

  return IconComponent;
}
