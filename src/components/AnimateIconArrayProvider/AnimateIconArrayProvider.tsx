import React, { createContext, useMemo } from 'react';

type AnimateIconArrayContextProps = {
  activeIndex?: number;
};

export const AnimateIconArrayContext =
  createContext<AnimateIconArrayContextProps>({
    activeIndex: 0,
  });

type AnimateIconArrayProviderProps = {
  children?: React.ReactNode;
  activeIndex?: number;
};

export const AnimateIconArrayProvider = (
  props: AnimateIconArrayProviderProps,
) => {
  const { children, activeIndex } = props;

  const value = useMemo(() => ({ activeIndex }), [activeIndex]);

  return (
    <AnimateIconArrayContext.Provider value={value}>
      {children}
    </AnimateIconArrayContext.Provider>
  );
};
