import './IconGrid.css';

import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

import { groupedIcons } from '../../__mocks__/mock.data';
import { IconPropSize, IconPropView } from '../../Icon';
import { IconGridItem } from './IconGridItem';

const cnIconGrid = cn('IconGrid');

type Props = {
  size?: IconPropSize;
  view?: IconPropView;
};

export function IconGrid(props: Props) {
  const { size, view } = props;

  return (
    <div className={cnIconGrid()}>
      {groupedIcons.map(({ name, icons }) => (
        <div className={cnIconGrid('Group')} key={cnIconGrid({ name })}>
          <Text size="xl" weight="semibold" view="primary">
            {name}
          </Text>
          <div className={cnIconGrid('Container')}>
            {Object.keys(icons).map((name) => (
              <IconGridItem
                key={name}
                name={name}
                icon={icons[name]}
                size={size}
                view={view}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
