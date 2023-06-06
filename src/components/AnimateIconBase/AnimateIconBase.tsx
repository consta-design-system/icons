import { useForkRef } from '@consta/uikit/useForkRef';
import { useRefs } from '@consta/uikit/useRefs';
import React, { forwardRef } from 'react';
import { Transition } from 'react-transition-group';

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
    ...otherProps
  } = props;
  const refs = useRefs<HTMLSpanElement>(icons.length);

  const activeRef = useForkRef([refs[activeIndex], ref]);

  const AnimateIcon = icons[0];

  return icons.length === 1 ? (
    <AnimateIcon
      ref={ref}
      style={{
        ['--mix-animate-icon-transition' as string]: `${transition}ms`,
        ...style,
      }}
      className={cnAnimateIconBase(null, [
        cnMixAnimateIcon({
          transform: 'rotate',
          direction: directions?.[activeIndex] ?? 'up',
        }),
        className,
      ])}
      {...otherProps}
    />
  ) : (
    <>
      {icons.map((Icon, index) => (
        <Transition
          in={activeIndex === index}
          key={cnAnimateIconBase({ key: index })}
          unmountOnExit
          timeout={transition}
          nodeRef={refs[index]}
        >
          {(animate) => (
            <Icon
              ref={index === activeIndex ? activeRef : refs[index]}
              style={{
                ['--mix-animate-icon-transition' as string]: `${transition}ms`,
                ...style,
              }}
              className={cnAnimateIconBase(null, [
                cnMixAnimateIcon({
                  transform: 'cubic',
                  animate,
                  direction: directions?.[index] ?? 'up',
                }),
                className,
              ])}
              {...otherProps}
            />
          )}
        </Transition>
      ))}
    </>
  );
});
