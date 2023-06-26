import React, { forwardRef, useContext } from 'react';

import { AnimateIconBase } from '##/components/AnimateIconBase';
import { AnimateIconBaseContext } from '##/components/AnimateIconBaseProvider';
import { IconComponent, IconProps } from '##/icons/Icon';

export type WithAnimateBaseHOCProps = {
  icons: IconComponent[];
  directions?: number[];
  transition?: number;
};

export const withAnimateBaseHOC = (
  params: WithAnimateBaseHOCProps,
): IconComponent =>
  forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const activeIndex = useContext(AnimateIconBaseContext);

    return (
      <AnimateIconBase
        {...params}
        {...props}
        activeIndex={activeIndex}
        ref={ref}
      />
    );
  }) as IconComponent;
