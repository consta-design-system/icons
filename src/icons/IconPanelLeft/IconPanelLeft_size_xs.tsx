import * as React from 'react';
import { SVGProps } from 'react';

const IconPanelLeftSizeXs = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 4H2v4h3V4z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2h12v8H0V2zm1 1h10v6H1V3z"
    />
  </svg>
);

export default IconPanelLeftSizeXs;