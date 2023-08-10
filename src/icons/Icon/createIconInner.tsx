import './Icon.css';

import {
  forwardRefWithAs,
  PropsWithAsAttributes,
} from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import {
  cnIcon,
  CreateIconArguments,
  IconComponent,
  IconProps,
  SvgComponent,
} from './helpers';
import { Icon } from './Icon';

type innerIconProps = PropsWithAsAttributes<IconProps, 'span'>;

export const createIconInner = (
  createProps: CreateIconArguments,
  svgComponent: SvgComponent,
): IconComponent<'span'> => {
  const Svg = svgComponent;
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
