import './Icon.css';

import {
  forwardRefWithAs,
  PropsWithAsAttributes,
} from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { createSvg } from './createSvg';
import {
  cnIcon,
  CreateIconArguments,
  IconComponent,
  IconProps,
} from './helpers';
import { Icon } from './Icon';

type innerIconProps = PropsWithAsAttributes<IconProps, 'span'>;

export const createIcon = (
  createProps: CreateIconArguments,
): IconComponent<'span'> => {
  const Svg = createSvg(createProps);
  return forwardRefWithAs<IconProps, 'span'>((props, ref) => {
    return (
      <Icon
        {...(props as innerIconProps)}
        color={createProps.color}
        name={createProps.name}
        ref={ref}
      >
        <Svg className={cnIcon('Svg')} size={props.size} />
      </Icon>
    );
  });
};
