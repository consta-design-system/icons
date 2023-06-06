import { IconProps } from '@consta/uikit/Icon';
import React, { useContext } from 'react';

import { AnimateIconBasePropDirection } from '##/components/AnimateIconBase/types';
import { AnimateIconBaseContext } from '##/components/AnimateIconBaseProvider';
import { AnimateIconSwitcher } from '##/components/AnimateIconSwitcher';
import { IconComponent } from '##/icons/Icon';

export type WithAnimateBaseHOCProps = {
  startIcon?: IconComponent;
  endIcon?: IconComponent;
  startDirection?: AnimateIconBasePropDirection;
  endDirection?: AnimateIconBasePropDirection;
  transition?: number;
};

export const withAnimateSwitcherHOC = (
  params: WithAnimateBaseHOCProps,
): IconComponent => {
  return React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const { activeIndex } = useContext(AnimateIconBaseContext);

    return (
      <AnimateIconSwitcher
        active={activeIndex !== 0}
        ref={ref}
        {...params}
        {...props}
      />
    );
  });
};
