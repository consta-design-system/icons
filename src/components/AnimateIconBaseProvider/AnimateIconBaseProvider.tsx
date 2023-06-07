import React from 'react';

import { AnimateIconBaseContext } from './context';

type AnimateIconBaseProviderProps = {
  children?: React.ReactNode;
  activeIndex?: number;
};

export const AnimateIconBaseProvider = (
  props: AnimateIconBaseProviderProps,
) => {
  return (
    <AnimateIconBaseContext.Provider value={props.activeIndex || 0}>
      {props.children}
    </AnimateIconBaseContext.Provider>
  );
};
