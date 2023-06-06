import React, { createContext, useMemo } from 'react';

type AnimateIconBaseContextProps = {
  activeIndex?: number;
};

export const AnimateIconBaseContext =
  createContext<AnimateIconBaseContextProps>({
    activeIndex: 0,
  });

type AnimateIconBaseProviderProps = {
  children?: React.ReactNode;
  activeIndex?: number;
};

export const AnimateIconBaseProvider = (
  props: AnimateIconBaseProviderProps,
) => {
  const { children, activeIndex } = props;

  const value = useMemo(() => ({ activeIndex }), [activeIndex]);

  return (
    <AnimateIconBaseContext.Provider value={value}>
      {children}
    </AnimateIconBaseContext.Provider>
  );
};
