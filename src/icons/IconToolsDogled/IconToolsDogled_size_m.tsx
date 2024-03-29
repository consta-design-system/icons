import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsDogledSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 21c18 0 18-1.5 18-18L3 21Z"
      fill="url(#SvgIconToolsDogled_size_m__a)"
    />
    <path d="M3 21c17 0 18-.5 18-18" stroke="#B5E2FC" strokeWidth={2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.293 4.464 4.464 7.293l3.122 3.121L6 12h6V6l-1.586 1.586-3.121-3.122Z"
      fill="var(--color-typo-primary)"
    />
    <defs>
      <linearGradient
        id="SvgIconToolsDogled_size_m__a"
        x1={17.5}
        y1={17.5}
        x2={12}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#93C5E5" />
        <stop offset={1} stopColor="#93C5E5" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconToolsDogledSizeM;
