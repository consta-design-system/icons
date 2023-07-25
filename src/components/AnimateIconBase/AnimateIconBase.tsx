import './AnimateIconBase.css';

import { forwardRefWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import { useRefs } from '@consta/uikit/useRefs';
import React from 'react';
import { Transition } from 'react-transition-group';

import { cnIcon, iconPropSizeDefault } from '##/icons/Icon';
import { cnMixAnimateIcon } from '##/mixs/MixAnimateIcon/MixAnimateIcon';
import { cn } from '##/utils/bem';

import { AnimateIconBaseProps } from './types';

const cnAnimateIconBase = cn('AnimateIconBase');

export const AnimateIconBase = forwardRefWithAs<AnimateIconBaseProps, 'span'>(
  (props, ref) => {
    const {
      className,
      activeIndex = 0,
      icons,
      directions,
      transition = 200,
      as = 'span',
      size = iconPropSizeDefault,
      view,
      style,
      ...otherProps
    } = props;
    const refs = useRefs<HTMLElement>(icons.length);

    const SingleIcon = icons[0];

    const Tag = as as string;

    const innerRender =
      icons.length === 1 ? (
        <SingleIcon size={size} view={view} />
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
      <Tag
        {...otherProps}
        className={cnIcon({ size }, [cnAnimateIconBase(), className])}
        ref={ref}
        style={{
          ...style,
          ['--animate-icon-transition' as string]: `${transition}ms`,
          ...(typeof directions?.[activeIndex] === 'number' && {
            ['--animate-icon-direction' as string]: `rotate(${directions[activeIndex]}deg)`,
          }),
        }}
      >
        {innerRender}
      </Tag>
    );
  },
);
