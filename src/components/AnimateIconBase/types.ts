import { IconComponent, IconProps } from '@consta/uikit/Icon';

export const animateIconBasePropDirection = [
  'up',
  'right',
  'down',
  'left',
  'upRight',
  'downRight',
  'upLeft',
  'downLeft',
] as const;
export type AnimateIconBasePropDirection =
  typeof animateIconBasePropDirection[number];

export type AnimateIconBaseProps = {
  icons: IconComponent[];
  directions?: AnimateIconBasePropDirection[];
  transition?: number;
  activeIndex?: number;
} & IconProps;
