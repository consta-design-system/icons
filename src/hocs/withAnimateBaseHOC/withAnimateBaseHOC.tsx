import { IconProps } from '@consta/uikit/Icon';
import React, { useContext } from 'react';

import { AnimateIconBase } from '##/components/AnimateIconBase';
import { AnimateIconBasePropDirection } from '##/components/AnimateIconBase/types';
import { AnimateIconBaseContext } from '##/components/AnimateIconBaseProvider';
import { IconComponent } from '##/icons/Icon';

export type WithAnimateBaseHOCProps = {
  icons: IconComponent[];
  directions?: AnimateIconBasePropDirection[];
  transition?: number;
};

export const withAnimateBaseHOC = (
  params: WithAnimateBaseHOCProps,
): IconComponent => {
  return React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const { activeIndex = 0 } = useContext(AnimateIconBaseContext);

    return (
      <AnimateIconBase
        activeIndex={activeIndex}
        ref={ref}
        {...params}
        {...props}
      />
    );
  });
};
