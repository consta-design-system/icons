import { ComponentWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';

import { IconProps, IconPropSize } from '##/icons/Icon';

import { LazyIconPropName } from './typeLazyIconPropName';

export type LazySvgProps = { name: LazyIconPropName; size?: IconPropSize };

export type LazyIconProps = IconProps & { name: LazyIconPropName };

export type LazyIconComponent<AS extends keyof JSX.IntrinsicElements = 'span'> =
  ComponentWithAs<LazyIconProps, AS>;
