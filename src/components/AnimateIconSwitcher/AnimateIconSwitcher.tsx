import React, { forwardRef, useMemo } from 'react';

import { IconComponent } from '##/icons/Icon';

import { AnimateIconBase } from '../AnimateIconBase';
import { AnimateIconSwitcherProps } from './types';

export const AnimateIconSwitcher = forwardRef<
  HTMLSpanElement,
  AnimateIconSwitcherProps
>((props, ref) => {
  const {
    startIcon,
    startDirection = 'up',
    endIcon,
    endDirection = 'up',
    active,
    ...otherProps
  } = props;

  const icons = useMemo(() => {
    const arr: IconComponent[] = [];
    if (startIcon) {
      arr.push(startIcon);
    }
    if (endIcon) {
      arr.push(endIcon);
    }
    return arr;
  }, [startIcon, endIcon]);

  return (
    <AnimateIconBase
      ref={ref}
      activeIndex={active ? 1 : 0}
      icons={icons}
      directions={[startDirection, endDirection]}
      {...otherProps}
    />
  );
});
