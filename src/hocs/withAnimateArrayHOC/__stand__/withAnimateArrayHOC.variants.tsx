import React, { useState } from 'react';

import { AnimateIconArrayProvider } from '##/components/AnimateIconArrayProvider';
import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconArrowUp } from '##/icons/IconArrowUp';

import { withAnimateArrayHOC } from '../withAnimateArrayHOC';

const Variants = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = withAnimateArrayHOC({
    icons: [IconArrowDown, IconArrowUp],
  });

  return (
    <AnimateIconArrayProvider activeIndex={isOpen ? 1 : 0}>
      <Icon onClick={() => setIsOpen(!isOpen)} />
    </AnimateIconArrayProvider>
  );
};

export default Variants;
