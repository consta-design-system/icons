import React, { memo } from 'react';

import { cnIcons, Icons } from '../IconsProvider';

type Props = {
  icons: Icons;
  names: string[];
};
export const IconsProviderList = memo(
  (props: Props) => {
    const { icons } = props;
    console.log(icons);

    return (
      <div className={cnIcons()}>
        {Object.keys(icons).map((key, index) => {
          const SvgRender = icons[key].svg({});
          if (!SvgRender) {
            return null;
          }
          const { children, ...otherProps } = SvgRender.props;
          return (
            <svg key={cnIcons(key, { index })}>
              <symbol {...otherProps} id={`${cnIcons(key)}`}>
                {children}
              </symbol>
            </svg>
          );
        })}
      </div>
    );
  },
  ({ names: prev }, { names: next }) => prev === next,
);
