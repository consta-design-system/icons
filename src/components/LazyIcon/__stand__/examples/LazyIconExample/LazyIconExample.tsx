import { Example } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { createLazyIcon, LazyIcon } from '##/components/LazyIcon';

export const LazyIconExample = () => {
  return (
    <Example>
      <LazyIcon name="IconAdd" />
    </Example>
  );
};

const Icon = createLazyIcon('IconAdd');

export const CreateLazyIconExample = () => {
  return (
    <Example>
      <Button onlyIcon iconLeft={Icon} />
    </Example>
  );
};
