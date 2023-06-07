import { IconComponent, IconProps } from '##/icons/Icon';

export type AnimateIconSwitcherProps = {
  startIcon?: IconComponent;
  endIcon?: IconComponent;
  startDirection?: number;
  endDirection?: number;
  transition?: number;
  active?: boolean;
} & IconProps;
