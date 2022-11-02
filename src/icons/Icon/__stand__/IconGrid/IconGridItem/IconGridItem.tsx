import './IconGridItem.css';

import { Text } from '@consta/uikit/Text';
import React from 'react';

import { IconComponent, IconProps } from '##/icons/Icon';
import { cn } from '##/utils/bem';

export type IconsItemProps = {
  icon: IconComponent;
  name: string;
} & IconProps;

const cnIconGridItem = cn('IconGridItem');

export const IconGridItem: React.FC<IconsItemProps> = ({
  icon,
  name,
  size,
  view,
}) => {
  const Icon = icon;
  return (
    <div className={cnIconGridItem()}>
      <Icon size={size} view={view} />
      <Text view="secondary">{name}</Text>
    </div>
  );
};
