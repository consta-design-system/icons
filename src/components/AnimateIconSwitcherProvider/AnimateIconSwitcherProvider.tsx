import React from 'react';

import { AnimateIconBaseProvider } from '../AnimateIconBaseProvider';

type AnimateIconSwitcherProviderProps = {
  children?: React.ReactNode;
  active?: boolean;
};

export const AnimateIconSwitcherProvider = (
  props: AnimateIconSwitcherProviderProps,
) => {
  const { children, active } = props;

  return (
    <AnimateIconBaseProvider activeIndex={active ? 1 : 0}>
      {children}
    </AnimateIconBaseProvider>
  );
};
