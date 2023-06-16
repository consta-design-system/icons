import { Example } from '@consta/stand';
import React, { useState } from 'react';

import { AnimateIconBase } from '##/components/AnimateIconBase';
import { IconClose } from '##/icons/IconClose';
import { IconDinosaur } from '##/icons/IconDinosaur';
import { IconDocAdd } from '##/icons/IconDocAdd';
import { IconRoute } from '##/icons/IconRoute';

export const AnimateIconBaseIcons = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Example col={1}>
      <AnimateIconBase
        onClick={() =>
          setActiveIndex((state) => (state + 1 > 3 ? 0 : state + 1))
        }
        icons={[IconDocAdd, IconDinosaur, IconClose, IconRoute]}
        activeIndex={activeIndex}
      />
    </Example>
  );
};

export const AnimateIconBaseDirections = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Example col={1}>
      <AnimateIconBase
        onClick={() =>
          setActiveIndex((state) => (state + 1 > 3 ? 0 : state + 1))
        }
        icons={[IconDinosaur]}
        directions={[0, 90, 180, 270]}
        activeIndex={activeIndex}
      />
    </Example>
  );
};

export const AnimateIconBaseIconsAndDirections = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Example col={1}>
      <AnimateIconBase
        onClick={() =>
          setActiveIndex((state) => (state + 1 > 3 ? 0 : state + 1))
        }
        icons={[IconDocAdd, IconDinosaur, IconClose, IconRoute]}
        directions={[0, 90, 180, 270]}
        activeIndex={activeIndex}
      />
    </Example>
  );
};
