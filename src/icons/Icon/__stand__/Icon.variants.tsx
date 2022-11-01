import { useSelect } from '@consta/stand';
import React from 'react';

import {
  iconPropSize,
  iconPropSizeDefault,
  iconPropView,
  iconPropViewDefault,
} from '../Icon';
import { IconGrid } from './IconGrid';

const Variants = () => {
  const size = useSelect('size', iconPropSize, iconPropSizeDefault);
  const view = useSelect('view', iconPropView, iconPropViewDefault);

  return <IconGrid size={size} view={view} />;
};

export default Variants;
