import React from 'react';
import ReactDOM from 'react-dom';

import { cnIcons, Icons } from '../IconsProvider';
import { IconsProviderIcon } from '../IconsProviderIcon';

type Props = {
  icons: Icons;
  container: Element;
};

export const IconsProviderList: React.FC<Props> = ({ icons, container }) => {
  return ReactDOM.createPortal(
    <div className={cnIcons()}>
      {Object.keys(icons).map((key) => (
        <IconsProviderIcon element={icons[key].svg} name={key} key={key} />
      ))}
    </div>,
    container,
  );
};
