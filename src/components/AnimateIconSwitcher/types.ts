import { IconComponent, IconProps } from '@consta/uikit/Icon';

export type AnimateIconSwitcherProps = {
  startIcon?: IconComponent;
  endIcon?: IconComponent;
  startDirection?: number;
  endDirection?: number;
  transition?: number;
  active?: boolean;
} & IconProps;
