import { IconComponent, IconProps } from '@consta/uikit/Icon';

export const animateIconArrayPropDirection = [
  'up',
  'right',
  'down',
  'left',
  'upRight',
  'downRight',
  'upLeft',
  'downLeft',
] as const;
export type AnimateIconArrayPropDirection =
  typeof animateIconArrayPropDirection[number];

export type AnimateIconArrayProps = {
  icons: IconComponent[];
  directions?: AnimateIconArrayPropDirection[];
  transition?: number;
  activeIndex?: number;
} & IconProps;
