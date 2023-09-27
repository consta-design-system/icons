import { AsTags } from '@consta/uikit/__internal__/src/utils/types/AsTags';
import { ComponentWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';

import { cn } from '##/utils/bem';

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

export type IconComponent<AS extends AsTags = 'span'> = ComponentWithAs<
  IconProps,
  AS
>;

export const cnIcon = cn('Icon');

export const renderTypeDefault = {
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

export type SvgProps = { size?: IconPropSize } & JSX.IntrinsicElements['svg'];

export type SvgComponent = React.FC<SvgProps>;
