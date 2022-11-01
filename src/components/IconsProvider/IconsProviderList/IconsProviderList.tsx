import React, { memo } from 'react';

import { cnIcons, Icons } from '../IconsProvider';

type Props = {
  icons: Icons;
  names: string[];
};
export const IconsProviderList = memo(
  (props: Props) => {
    const { icons } = props;

    return (
      <div className={cnIcons()}>
        {Object.keys(icons).map((key, index) => {
          const SvgElement = icons[key].svg;
          if (!SvgElement) {
            return null;
          }
          const { children, ...otherProps } = SvgElement.props;
          return (
            <svg key={cnIcons(key)}>
              <symbol {...otherProps} id={`${cnIcons(key)}`}>
                {children}
              </symbol>
            </svg>
          );
        })}
      </div>
    );
  },
  ({ names: namesPrev }, { names: namesNext }) => namesPrev === namesNext,
);
