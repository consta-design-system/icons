import { IconComponent, IconProps } from '@consta/uikit/Icon';

import { AnimateIconBasePropDirection } from '../AnimateIconBase/types';

export type AnimateIconSwitcherProps = {
  startIcon?: IconComponent;
  endIcon?: IconComponent;
  startDirection?: AnimateIconBasePropDirection;
  endDirection?: AnimateIconBasePropDirection;
  transition?: number;
  active?: boolean;
} & IconProps;
