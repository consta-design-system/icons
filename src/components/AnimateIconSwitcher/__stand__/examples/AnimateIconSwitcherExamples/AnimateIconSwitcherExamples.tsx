import { Example } from '@consta/stand';
import { useFlag } from '@consta/uikit/useFlag';
import React from 'react';

import { AnimateIconSwitcher } from '##/components/AnimateIconSwitcher';
import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconDinosaur } from '##/icons/IconDinosaur';
import { IconDocAdd } from '##/icons/IconDocAdd';

export const AnimateIconSwitcherIcons = () => {
  const [active, setActive] = useFlag();

  return (
    <Example col={1}>
      <AnimateIconSwitcher
        onClick={setActive.toggle}
        startIcon={IconDocAdd}
        endIcon={IconDinosaur}
        active={active}
      />
    </Example>
  );
};

export const AnimateIconSwitcherDirections = () => {
  const [active, setActive] = useFlag();

  return (
    <Example col={1}>
      <AnimateIconSwitcher
        onClick={setActive.toggle}
        startIcon={IconArrowDown}
        startDirection={0}
        endDirection={180}
        active={active}
      />
    </Example>
  );
};

export const AnimateIconSwitcherIconsAndDirections = () => {
  const [active, setActive] = useFlag();

  return (
    <Example col={1}>
      <AnimateIconSwitcher
        onClick={setActive.toggle}
        startIcon={IconDocAdd}
        endIcon={IconDinosaur}
        startDirection={0}
        endDirection={180}
        active={active}
      />
    </Example>
  );
};
