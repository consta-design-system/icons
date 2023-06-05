import { IconProps } from '@consta/uikit/Icon';
import React, { useContext } from 'react';

import { AnimateIconArray } from '##/components/AnimateIconArray';
import { AnimateIconArrayPropDirection } from '##/components/AnimateIconArray/types';
import { AnimateIconArrayContext } from '##/components/AnimateIconArrayProvider';
import { IconComponent } from '##/icons/Icon';

export type WithAnimateArrayHOCProps = {
  icons: IconComponent[];
  directions?: AnimateIconArrayPropDirection[];
  transition?: number;
};

export const withAnimateArrayHOC = (
  params: WithAnimateArrayHOCProps,
): IconComponent => {
  return React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const { activeIndex = 0 } = useContext(AnimateIconArrayContext);

    return (
      <AnimateIconArray
        activeIndex={activeIndex}
        ref={ref}
        {...params}
        {...props}
      />
    );
  });
};
