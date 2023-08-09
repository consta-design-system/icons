import { useSelect } from '@consta/stand';
import React from 'react';

import {
  iconPropSize,
  iconPropSizeDefault,
  iconPropView,
  iconPropViewDefault,
} from '##/icons/Icon';

import { LazyIcon } from '..';
import { iconNames } from './iconNames';

const Variants = () => {
  const name = useSelect('name', iconNames, iconNames[0]) || iconNames[0];
  const size = useSelect('size', iconPropSize, iconPropSizeDefault);
  const view = useSelect('view', iconPropView, iconPropViewDefault);

  return <LazyIcon name={name} size={size} view={view} />;
};

export default Variants;
