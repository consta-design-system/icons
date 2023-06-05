import './AnimateIconArray.css';

import React, { forwardRef } from 'react';

import { AnimateIconArray } from '../AnimateIconArray';
import { AnimateIconProps } from './types';

export const AnimateIcon = forwardRef<HTMLSpanElement, AnimateIconProps>(
  (props, ref) => {
    const {
      startIcon,
      startDirection = 'up',
      endIcon,
      endDirection = 'up',
      active,
      ...otherProps
    } = props;

    return (
      <AnimateIconArray
        ref={ref}
        activeIndex={active ? 1 : 0}
        icons={[startIcon, endIcon]}
        directions={[startDirection, endDirection]}
        {...otherProps}
      />
    );
  },
);
