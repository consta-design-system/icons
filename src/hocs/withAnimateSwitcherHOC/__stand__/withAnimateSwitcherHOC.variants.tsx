import { Button } from '@consta/uikit/Button';
import React, { useState } from 'react';

import { AnimateIconBaseProvider } from '##/components/AnimateIconBaseProvider';
import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconArrowUp } from '##/icons/IconArrowUp';

import { withAnimateSwitcherHOC } from '../withAnimateSwitcherHOC';

const Icon = withAnimateSwitcherHOC({
  startIcon: IconArrowDown,
  endIcon: IconArrowUp,
});

const Variants = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimateIconBaseProvider activeIndex={isOpen ? 1 : 0}>
      <Button iconLeft={Icon} onClick={() => setIsOpen(!isOpen)} />
    </AnimateIconBaseProvider>
  );
};

export default Variants;
