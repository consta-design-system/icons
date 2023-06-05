import './AnimateIconArray.css';

import { useForkRef } from '@consta/uikit/useForkRef';
import { useRefs } from '@consta/uikit/useRefs';
import React, { forwardRef } from 'react';
import { Transition } from 'react-transition-group';

import { cn } from '##/utils/bem';

import { AnimateIconArrayProps } from './types';

const cnAnimateIconArray = cn('AnimateIconArray');

export const AnimateIconArray = forwardRef<
  HTMLSpanElement,
  AnimateIconArrayProps
>((props, ref) => {
  const {
    className,
    activeIndex = 0,
    icons,
    directions,
    transition = 200,
    ...otherProps
  } = props;
  const refs = useRefs<HTMLSpanElement>(icons.length);

  const activeRef = useForkRef([refs[activeIndex], ref]);

  return (
    <>
      {icons.map((Icon, index) => (
        <Transition
          in={activeIndex === index}
          key={cnAnimateIconArray({ key: index })}
          unmountOnExit
          timeout={transition}
          nodeRef={refs[index]}
        >
          {(animate) => (
            <Icon
              ref={index === activeIndex ? activeRef : refs[index]}
              className={cnAnimateIconArray(
                {
                  animate,
                  direction: directions?.[index] ?? 'up',
                },
                [className],
              )}
              {...otherProps}
            />
          )}
        </Transition>
      ))}
    </>
  );
});
