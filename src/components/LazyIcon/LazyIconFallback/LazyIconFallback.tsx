import './LazyIconFallback.css';

import React from 'react';

import { SvgProps } from '##/icons/Icon';
import IconRecordSvg from '##/icons/IconRecord/svg';
import { cn } from '##/utils/bem';

type LazyIconFallbackProps = SvgProps & { animate?: boolean };

const cnLazyIconFallback = cn('LazyIconFallback');

export const LazyIconFallback: React.FC<LazyIconFallbackProps> = (props) => {
  const { animate, className, ...svgProps } = props;
  return (
    <IconRecordSvg
      {...svgProps}
      className={cnLazyIconFallback({ animate }, [className])}
    />
  );
};
