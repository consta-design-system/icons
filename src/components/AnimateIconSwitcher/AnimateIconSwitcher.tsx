import { isNotNil } from '@consta/uikit/__internal__/src/utils/type-guards';
import { forwardRefWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { AnimateIconBase } from '../AnimateIconBase';
import { AnimateIconSwitcherProps } from './types';

export const AnimateIconSwitcher = forwardRefWithAs<
  AnimateIconSwitcherProps,
  'span'
>((props, ref) => {
  const {
    startIcon,
    startDirection = 0,
    endIcon,
    endDirection = 0,
    active,
    ...otherProps
  } = props;

  return (
    <AnimateIconBase
      {...otherProps}
      ref={ref}
      activeIndex={active ? 1 : 0}
      icons={[startIcon, endIcon].filter(isNotNil)}
      directions={
        startDirection || endDirection
          ? [startDirection, endDirection]
          : undefined
      }
    />
  );
});
