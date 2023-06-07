import React from 'react';

import { AnimateIconBaseContext } from '##/components/AnimateIconBaseProvider';

type AnimateIconSwitcherProviderProps = {
  children?: React.ReactNode;
  active?: boolean;
};

export const AnimateIconSwitcherProvider = (
  props: AnimateIconSwitcherProviderProps,
) => {
  return (
    <AnimateIconBaseContext.Provider value={props.active ? 1 : 0}>
      {props.children}
    </AnimateIconBaseContext.Provider>
  );
};
