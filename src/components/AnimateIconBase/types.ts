import { IconComponent, IconProps } from '@consta/uikit/Icon';

export type AnimateIconBaseProps = {
  icons: IconComponent[];
  directions?: number[];
  transition?: number;
  activeIndex?: number;
} & IconProps;
