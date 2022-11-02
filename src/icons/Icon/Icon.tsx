import './Icon.css';

import React, { forwardRef, useContext, useEffect, useMemo } from 'react';

import { cnIcons, IconsContext } from '##/components/IconsProvider';

import { cn } from '../../utils/bem';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';

export const iconPropSize = ['m', 's', 'xs', 'l'] as const;
export type IconPropSize = typeof iconPropSize[number];
export const iconPropSizeDefault = iconPropSize[0];

export const iconPropView = [
  'primary',
  'alert',
  'brand',
  'ghost',
  'link',
  'secondary',
  'success',
  'warning',
  'disabled',
] as const;
export type IconPropView = typeof iconPropView[number];
export const iconPropViewDefault = iconPropView[0];

export type IconProps = PropsWithHTMLAttributesAndRef<
  {
    view?: IconPropView;
    size?: IconPropSize;
  },
  HTMLSpanElement
>;

export type IconComponent = React.FC<IconProps>;

export const cnIcon = cn('Icon');

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

export type CreateIconArguments = {
  l: React.FC<React.SVGProps<SVGSVGElement>>;
  m: React.FC<React.SVGProps<SVGSVGElement>>;
  s: React.FC<React.SVGProps<SVGSVGElement>>;
  xs: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  renderType?: CreateIconRenderType;
  color?: 'mono' | 'multiple';
};

export function createIcon(createProps: CreateIconArguments) {
  const { name, renderType = renderTypeDefault, color = 'mono' } = createProps;
  const IconComponent = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const { size = 'm', className, view } = props;
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
      <span
        {...props}
        className={cnIcon({ size, view, color }, [name, className])}
        ref={ref}
      >
        {addIcon && renderType[size] === 'use' ? (
          <svg {...otherProps}>
            <use x="0" y="0" xlinkHref={`#${cnIcons(`${name}_${size}`)}`} />
          </svg>
        ) : (
          <Svg className={cnIcon('Svg')} />
        )}
      </span>
    );
  });

  return IconComponent;
}
