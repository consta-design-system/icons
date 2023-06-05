import { IconComponent, IconProps } from '@consta/uikit/Icon';

import { AnimateIconArrayPropDirection } from '../AnimateIconArray/types';

export type AnimateIconProps = {
  startIcon: IconComponent;
  endIcon: IconComponent;
  startDirection?: AnimateIconArrayPropDirection;
  endDirection?: AnimateIconArrayPropDirection;
  transition?: number;
  active?: boolean;
} & IconProps;
