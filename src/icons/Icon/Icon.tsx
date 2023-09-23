import './Icon.css';

import { AsTags } from '@consta/uikit/__internal__/src/utils/types/AsTags';
import {
  ComponentWithAs,
  forwardRefWithAs,
} from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { cnIcon, IconProps } from './helpers';

type IconComponent<AS extends AsTags = 'span'> = ComponentWithAs<
  IconProps & { color?: 'mono' | 'multiple'; name: string },
  AS
>;

export const Icon: IconComponent = forwardRefWithAs<
  IconProps & { color?: 'mono' | 'multiple'; name: string },
  'span'
>((props, ref) => {
  const {
    size = 'm',
    className,
    view,
    as = 'span',
    children,
    color = 'mono',
    name,
    ...otherProps
  } = props;

  const Tag = as as string;

  return (
    <Tag
      {...otherProps}
      className={cnIcon({ size, view, color }, [name, className])}
      ref={ref}
    >
      {children}
    </Tag>
  );
});
