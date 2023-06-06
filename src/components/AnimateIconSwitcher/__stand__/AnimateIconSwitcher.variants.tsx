import { useSelect } from '@consta/stand';
import { useFlag } from '@consta/uikit/useFlag';
import React from 'react';

import { animateIconBasePropDirection } from '##/components/AnimateIconBase/types';
import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconArrowUp } from '##/icons/IconArrowUp';

import { AnimateIconSwitcher } from '../AnimateIconSwitcher';

const transitions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const Variants = () => {
  const [isOpen, setIsOpen] = useFlag();
  const transition = useSelect('transition', transitions, 200);
  const startDirection = useSelect(
    'startDirection',
    animateIconBasePropDirection,
    'up',
  );
  const endDirection = useSelect(
    'endDirection',
    animateIconBasePropDirection,
    'up',
  );

  return (
    <AnimateIconSwitcher
      onClick={setIsOpen.toggle}
      active={isOpen}
      startIcon={IconArrowDown}
      endIcon={IconArrowUp}
      transition={transition}
      endDirection={endDirection}
      startDirection={startDirection}
    />
  );
};

export default Variants;
