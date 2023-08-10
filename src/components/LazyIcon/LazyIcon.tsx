import {
  forwardRefWithAs,
  PropsWithAsAttributes,
} from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React, { lazy, memo, Suspense } from 'react';

import { ErrorBoundary } from '##/components/ErrorBoundary';
import { cnIcon, IconComponent, IconProps } from '##/icons/Icon/helpers';
import { Icon } from '##/icons/Icon/Icon';

import { LazyIconFallback } from './LazyIconFallback';
import { LazyIconComponent, LazyIconProps, LazySvgProps } from './types';

type innerIconProps = PropsWithAsAttributes<IconProps, 'span'> & {
  name: string;
  color?: 'mono' | 'multiple';
};

const LazySvg: React.FC<LazySvgProps> = memo(
  ({ name, size = 'm' }) => {
    const Svg = lazy(
      () => import(`../../icons/${name}/svg`),
    ) as unknown as IconComponent;

    return (
      <ErrorBoundary
        fallback={<LazyIconFallback className={cnIcon('Svg')} size={size} />}
      >
        <Suspense
          fallback={
            <LazyIconFallback className={cnIcon('Svg')} size={size} animate />
          }
        >
          <Svg className={cnIcon('Svg')} size={size} />
        </Suspense>
      </ErrorBoundary>
    );
  },
  (prev, next) => prev.name === next.name && prev.size === next.size,
);

export const LazyIcon: LazyIconComponent<'span'> = forwardRefWithAs<
  LazyIconProps,
  'span'
>((props, ref) => {
  return (
    <Icon {...(props as innerIconProps)} ref={ref}>
      <LazySvg name={props.name} size={props.size} />
    </Icon>
  );
});
