import { useFlag } from '@consta/uikit/useFlag';
import React from 'react';

import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconArrowUp } from '##/icons/IconArrowUp';

import { AnimateIcon } from '../AnimateIcon';

const Variants = () => {
  const [isOpen, setIsOpen] = useFlag();

  return (
    <AnimateIcon
      onClick={setIsOpen.toggle}
      active={isOpen}
      startIcon={IconArrowDown}
      endIcon={IconArrowUp}
    />
  );
};

export default Variants;
