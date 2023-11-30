import { Example } from '@consta/stand';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { groupedIcons } from '../../__mocks__/mock.data';

const getItemStatus = () => 'system' as const;
const getItemDescription = (name: string) => name;

export function IconGrid() {
  return (
    <div>
      {groupedIcons.map(({ name, icons }) => (
        <div key={name}>
          <Text size="xl" weight="semibold" view="primary" lineHeight="m">
            {name}
          </Text>
          <Example
            col={{ 1: 0, 2: 500, 3: 700, 4: 890 }}
            getItemStatus={getItemStatus}
            getItemNode={(name) => {
              const Icon = icons[name];
              return <Icon />;
            }}
            getItemDescription={getItemDescription}
            items={Object.keys(icons) as (keyof typeof icons)[]}
          />
        </div>
      ))}
    </div>
  );
}
