import { Group, Lib } from '@consta/stand';
import React from 'react';

import { IconsProvider } from '##/components/IconsProvider';

export const StandPageDecoration: Lib<Group>['standPageDecoration'] = (
  props,
) => {
  return <IconsProvider>{props.children}</IconsProvider>;
};
