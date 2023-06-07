import './AnimateIconBase.css';

import { useRefs } from '@consta/uikit/useRefs';
import React, { forwardRef } from 'react';
import { Transition } from 'react-transition-group';

import { iconPropSizeDefault } from '##/icons/Icon';
import { cnMixAnimateIcon } from '##/mixs/MixAnimateIcon/MixAnimateIcon';
import { cn } from '##/utils/bem';

import { AnimateIconBaseProps } from './types';

const cnAnimateIconBase = cn('AnimateIconBase');

export const AnimateIconBase = forwardRef<
  HTMLSpanElement,
  AnimateIconBaseProps
>((props, ref) => {
  const {
    className,
    activeIndex = 0,
    icons,
    directions,
    transition = 200,
    style,
    size = iconPropSizeDefault,
    view,
    ...otherProps
  } = props;
  const refs = useRefs<HTMLSpanElement>(icons.length);

  const AnimateIcon = icons[0];

  const innerRender =
    icons.length === 1 ? (
      <AnimateIcon size={size} view={view} />
    ) : (
      icons.map((Icon, index) => (
        <Transition
          in={activeIndex === index}
          key={cnAnimateIconBase({ key: index })}
          unmountOnExit
          timeout={transition}
          nodeRef={refs[index]}
        >
          {(animate) => (
            <Icon
              ref={refs[index]}
              className={cnMixAnimateIcon({
                animate,
              })}
              size={size}
              view={view}
            />
          )}
        </Transition>
      ))
    );

  return (
    <span
      {...otherProps}
      className={cnAnimateIconBase({ size }, [className])}
      style={{
        ['--animate-icon-transition' as string]: `${transition}ms`,
        ['--direction-transform' as string]: `rotate(${
          directions?.[activeIndex] || 0
        }deg)`,
        ...style,
      }}
      ref={ref}
    >
      {innerRender}
    </span>
  );
});
