import './Icon.css';

import {
  ComponentWithAs,
  forwardRefWithAs,
} from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React, { useContext, useEffect, useMemo } from 'react';

import { cnIcons, IconsContext } from '##/components/IconsProvider';

import { cn } from '../../utils/bem';

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

export type IconProps = {
  view?: IconPropView;
  size?: IconPropSize;
};

export type IconComponent<AS extends keyof JSX.IntrinsicElements = 'span'> =
  ComponentWithAs<IconProps, AS>;

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

export const createIcon = (
  createProps: CreateIconArguments,
): IconComponent<'span'> =>
  forwardRefWithAs<IconProps, 'span'>((props, ref) => {
    const {
      name,
      renderType = renderTypeDefault,
      color = 'mono',
    } = createProps;
    const {
      size = 'm',
      className,
      view,
      as = 'span',
      children,
      ...otherProps
    } = props;
    const Svg = createProps[size];
    const { addIcon, removeIcon } = useContext(IconsContext);

    const SvgElement = useMemo(() => {
      return renderType[size] === 'use'
        ? Svg({ className: cnIcon('Svg', { color }) })
        : null;
    }, [Svg]);

    const Tag = as as string;

    const { children: _children, ...svgProps } = SvgElement?.props ?? {};

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
      <Tag
        {...otherProps}
        className={cnIcon({ size, view, color }, [name, className])}
        ref={ref}
      >
        {addIcon && renderType[size] === 'use' ? (
          <svg {...svgProps}>
            <use x="0" y="0" xlinkHref={`#${cnIcons(`${name}_${size}`)}`} />
          </svg>
        ) : (
          <Svg className={cnIcon('Svg')} />
        )}
      </Tag>
    );
  });
