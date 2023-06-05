import { useFlag } from '@consta/uikit/useFlag';
import React from 'react';

import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconArrowUp } from '##/icons/IconArrowUp';

import { AnimateIconArray } from '../AnimateIconArray';

const Variants = () => {
  const [isOpen, setIsOpen] = useFlag();

  return (
    <AnimateIconArray
      onClick={setIsOpen.toggle}
      activeIndex={isOpen ? 1 : 0}
      icons={[IconArrowDown, IconArrowUp]}
    />
  );
};

export default Variants;
