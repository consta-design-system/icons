import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsMaxAngleSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={-11}
        y={1}
        width={26}
        height={26}
      >
        <circle cx={2} cy={14} r={13} fill="var(--color-typo-ghost)" />
      </mask>
      <g mask="url(#b)">
        <path
          d="M15.867 14H2L10.533.467"
          stroke="var(--color-typo-secondary)"
        />
      </g>
      <path
        d="M6.5 6.206A9 9 0 0 1 11 14"
        stroke="var(--color-typo-primary)"
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconToolsMaxAngleSizeS;
