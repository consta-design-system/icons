import './IconsProvider.css';

import React, { createContext, useMemo, useState } from 'react';

import { IconProps } from '##/icons/Icon';
import { cn } from '##/utils/bem';

import { IconsProviderList } from './IconsProviderList/IconsProviderList';

export type Icons = Record<
  string,
  { count: number; svg: React.ReactNode | null }
>;

type IconsContextAddIcon = (
  iconName: string,
  size: IconProps['size'],
  svg: React.ReactNode | null,
) => void;

type IconsContextRemoveIcon = (
  iconName: string,
  size: IconProps['size'],
) => void;

type IconsContextParams = {
  addIcon: IconsContextAddIcon | undefined;
  removeIcon: IconsContextRemoveIcon | undefined;
};

const defaultContextValue: IconsContextParams = {
  addIcon: undefined,
  removeIcon: undefined,
};

export const cnIcons = cn('Icons');

export const IconsContext =
  createContext<IconsContextParams>(defaultContextValue);

export const IconsProvider: React.FC<{
  children: React.ReactNode;
  container?: Element;
}> = ({ children, container = window.document.body }) => {
  const [icons, setIcons] = useState<Icons>({});

  const value = useMemo(() => {
    const addIcon: IconsContextAddIcon = (name, size = 'm', svg) => {
      const key = `${name}_${size}`;
      setIcons((prev) => ({
        ...prev,
        [key]: {
          count: typeof prev[key] === 'object' ? prev[key].count + 1 : 1,
          svg,
        },
      }));
    };

    const removeIcon: IconsContextRemoveIcon = (name, size = 'm') => {
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

    return { addIcon, removeIcon };
  }, []);

  return (
    <>
      <IconsContext.Provider value={value}>{children}</IconsContext.Provider>
      <IconsProviderList icons={icons} container={container} />
    </>
  );
};
