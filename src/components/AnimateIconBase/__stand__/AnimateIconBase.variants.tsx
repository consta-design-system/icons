import { useSelect } from '@consta/stand';
import React, { useMemo, useState } from 'react';

import { IconComponent } from '##/icons/Icon';
import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconArrowUp } from '##/icons/IconArrowUp';
import { IconDinosaur } from '##/icons/IconDinosaur';

import { AnimateIconBase } from '../AnimateIconBase';
import { AnimateIconBasePropDirection } from '../types';

const transitions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const Variants = () => {
  const transition = useSelect('transition', transitions, 200);
  const icons = useSelect('icons', [1, 2, 3], 1);

  const [activeIndex, setActiveIndex] = useState(0);

  const { array, directions } = useMemo<{
    array: IconComponent[];
    directions: AnimateIconBasePropDirection[];
  }>(() => {
    if (icons === 1) {
      return {
        array: [IconArrowDown],
        directions: ['up', 'left', 'down', 'right'],
      };
    }
    if (icons === 2) {
      return {
        array: [IconArrowDown, IconArrowUp],
        directions: [],
      };
    }
    return {
      array: [IconArrowDown, IconArrowUp, IconDinosaur],
      directions: [],
    };
  }, [icons]);

  const onClick = () => {
    if (icons === 2) {
      setActiveIndex(activeIndex + 1 > 1 ? 0 : activeIndex + 1);
      return;
    }
    if (icons === 1) {
      setActiveIndex(activeIndex + 1 > 3 ? 0 : activeIndex + 1);
      return;
    }
    setActiveIndex(activeIndex + 1 > 2 ? 0 : activeIndex + 1);
  };

  return (
    <AnimateIconBase
      transition={transition}
      directions={directions}
      onClick={onClick}
      activeIndex={activeIndex}
      icons={array}
    />
  );
};

export default Variants;
