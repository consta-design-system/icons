import * as React from 'react';
import { SVGProps } from 'react';

const IconSolverDepthSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="SvgIconSolverDepth_size_m__b"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={2}
      width={13}
      height={20}
    >
      <path
        transform="matrix(1 0 0 -1 4 22)"
        fill="url(#SvgIconSolverDepth_size_m__a)"
        d="M0 0h13v20H0z"
      />
    </mask>
    <g mask="url(#SvgIconSolverDepth_size_m__b)">
      <path fill="#91C2A6" d="M4 2h13v20H4z" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4h6v2h-6V4Zm0 7h6v2h-6v-2Zm6 7h-6v2h6v-2Z"
      fill="var(--color-control-typo-ghost)"
    />
    <defs>
      <linearGradient
        id="SvgIconSolverDepth_size_m__a"
        x1={6.5}
        y1={0}
        x2={6.5}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconSolverDepthSizeM;
