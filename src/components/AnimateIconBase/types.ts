import { IconComponent, IconProps } from '##/icons/Icon';

export type AnimateIconBaseProps = {
  icons: IconComponent[];
  directions?: number[];
  transition?: number;
  activeIndex?: number;
} & IconProps;
