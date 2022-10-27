import { useSelect } from '@consta/stand';
import React from 'react';

import { IconGrid } from './IconGrid';

const Variants = () => {
  const size = useSelect('size', ['xs', 's', 'm', 'l']);
  const view = useSelect('view', [
    'alert',
    'brand',
    'ghost',
    'link',
    'primary',
    'secondary',
    'success',
    'warning',
    'disabled',
  ]);

  return <IconGrid size={size} view={view} />;
};

export default Variants;
