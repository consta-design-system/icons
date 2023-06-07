import { IconProps } from '@consta/uikit/Icon';
import React, { forwardRef, useContext } from 'react';

import { AnimateIconBase } from '##/components/AnimateIconBase';
import { AnimateIconBaseContext } from '##/components/AnimateIconBaseProvider';
import { IconComponent } from '##/icons/Icon';

export type WithAnimateBaseHOCProps = {
  icons: IconComponent[];
  directions?: number[];
  transition?: number;
};

export const withAnimateBaseHOC = (
  params: WithAnimateBaseHOCProps,
): IconComponent => {
  return forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const activeIndex = useContext(AnimateIconBaseContext);

    return (
      <AnimateIconBase
        {...props}
        {...params}
        activeIndex={activeIndex}
        ref={ref}
      />
    );
  });
};
