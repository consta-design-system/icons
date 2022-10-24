import './IconsProvider.css';

import React, { createContext, useMemo, useState } from 'react';

import { IconProps } from '##/icons/Icon';
import { withPrefix } from '##/utils/bem';

import { IconsProviderList } from './IconsProviderList/IconsProviderList';

export type Icons = Record<
  string,
  { count: number; svg: React.FC<React.SVGProps<SVGSVGElement>> }
>;
type IconsContextParams = {
  addIcon: (
    iconName: string,
    size: IconProps['size'],
    svg: React.FC<React.SVGProps<SVGSVGElement>>,
  ) => void;
  removeIcon: (iconName: string, size: IconProps['size']) => void;
};

const defaultContextValue: IconsContextParams = {
  addIcon: () => {},
  removeIcon: () => {},
};

export const cnIcons = withPrefix('icons')('Icons');

export const IconsContext =
  createContext<IconsContextParams>(defaultContextValue);

export const IconsProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const { children } = props;

  const [icons, setIcons] = useState<Icons>({});

  const removeIcon: IconsContextParams['removeIcon'] = (name, size = 'm') => {
    const key = `${name}_${size}`;
    setIcons((prev) => {
      const copyIcons = { ...prev };
      if (copyIcons[key].count === 1) {
        delete copyIcons[key];
      } else {
        copyIcons[key].count -= 1;
      }
      return copyIcons;
    });
  };

  const addIcon: IconsContextParams['addIcon'] = (name, size = 'm', svg) => {
    const key = `${name}_${size}`;
    setIcons((prev) => ({
      ...prev,
      [key]: {
        count: typeof prev[key] === 'object' ? prev[key].count + 1 : 1,
        svg,
      },
    }));
  };

  const value = useMemo(() => ({ addIcon, removeIcon }), []);

  const names = useMemo(
    () => Object.keys(icons).sort(),
    [Object.keys(icons).sort().join(',')],
  );

  return (
    <IconsContext.Provider value={value}>
      <>
        {children}
        <IconsProviderList icons={icons} names={names} />
      </>
    </IconsContext.Provider>
  );
};
