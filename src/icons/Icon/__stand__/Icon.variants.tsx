import { useSelect } from '@consta/stand';
import React from 'react';

import { IconDinosaur } from '##/icons/IconDinosaur';

import {
  iconPropSize,
  iconPropSizeDefault,
  iconPropView,
  iconPropViewDefault,
} from '..';

const Variants = () => {
  const size = useSelect('size', iconPropSize, iconPropSizeDefault);
  const view = useSelect('view', iconPropView, iconPropViewDefault);

  return <IconDinosaur size={size} view={view} />;
};

export default Variants;
