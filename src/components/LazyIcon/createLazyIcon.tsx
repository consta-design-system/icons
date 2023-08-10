import { forwardRefWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { IconComponent } from '##/icons/Icon';

import { LazyIcon } from './LazyIcon';
import { LazyIconPropName } from './typeLazyIconPropName';
import { LazyIconProps } from './types';

export const createLazyIcon = (name: LazyIconPropName): IconComponent =>
  forwardRefWithAs((props, ref) => (
    <LazyIcon {...(props as LazyIconProps)} ref={ref} name={name} />
  )) as IconComponent;
