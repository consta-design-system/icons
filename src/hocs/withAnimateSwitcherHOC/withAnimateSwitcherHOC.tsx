import React, { forwardRef, useContext } from 'react';

import { AnimateIconBaseContext } from '##/components/AnimateIconBaseProvider';
import { AnimateIconSwitcher } from '##/components/AnimateIconSwitcher';
import { IconComponent, IconProps } from '##/icons/Icon';

export type WithAnimateBaseHOCProps = {
  startIcon?: IconComponent;
  endIcon?: IconComponent;
  startDirection?: number;
  endDirection?: number;
  transition?: number;
};

export const withAnimateSwitcherHOC = (
  params: WithAnimateBaseHOCProps,
): IconComponent => {
  return forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const activeIndex = useContext(AnimateIconBaseContext);

    return (
      <AnimateIconSwitcher
        {...props}
        {...params}
        active={activeIndex !== 0}
        ref={ref}
      />
    );
  });
};
