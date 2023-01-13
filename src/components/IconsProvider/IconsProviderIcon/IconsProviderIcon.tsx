import React, { memo } from 'react';

import { cnIcons } from '../IconsProvider';

type Props = {
  element: React.ReactElement | null;
  name: string;
};

export const IconsProviderIcon = memo(
  ({ element, name }: Props) => {
    if (!element) {
      return null;
    }

    return (
      <svg key={cnIcons(name)}>
        <symbol id={`${cnIcons(name)}`}>{element.props.children}</symbol>
      </svg>
    );
  },
  ({ name: namePrev }, { name: nameNext }) => namePrev === nameNext,
);
