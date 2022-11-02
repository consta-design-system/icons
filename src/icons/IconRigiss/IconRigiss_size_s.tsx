import * as React from 'react';
import { SVGProps } from 'react';

const IconRigissSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 2C2.77614 2 3 2.20664 3 2.46154L3 13.5385C3 13.7934 2.77614 14 2.5 14C2.22386 14 2 13.7934 2 13.5385L2 2.46154C2 2.20664 2.22386 2 2.5 2Z"
      fill="var(--color-typo-primary)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 2C4.77614 2 5 2.20664 5 2.46154L5 13.5385C5 13.7934 4.77614 14 4.5 14C4.22386 14 4 13.7934 4 13.5385L4 2.46154C4 2.20664 4.22386 2 4.5 2Z"
      fill="var(--color-typo-primary)"
    />
    <rect
      x={8}
      y={2}
      width={6}
      height={12}
      rx={1}
      fill="url(#paint0_linear_23979_1528)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_23979_1528"
        x1={11}
        y1={2}
        x2={11}
        y2={14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2BCC6C" />
        <stop offset={0.515625} stopColor="#FFF625" />
        <stop offset={1} stopColor="#FE5353" />
      </linearGradient>
    </defs>
  </svg>
);

export default IconRigissSizeS;
