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
      d="M2.5 2c.276 0 .5.207.5.462v11.077c0 .254-.224.461-.5.461s-.5-.207-.5-.461V2.462C2 2.207 2.224 2 2.5 2ZM4.5 2c.276 0 .5.207.5.462v11.077c0 .254-.224.461-.5.461s-.5-.207-.5-.461V2.462C4 2.207 4.224 2 4.5 2Z"
      fill="var(--color-typo-primary)"
    />
    <rect
      x={8}
      y={2}
      width={6}
      height={12}
      rx={1}
      fill="url(#SvgIconRigiss_size_s__a)"
    />
    <defs>
      <linearGradient
        id="SvgIconRigiss_size_s__a"
        x1={11}
        y1={2}
        x2={11}
        y2={14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2BCC6C" />
        <stop offset={0.516} stopColor="#FFF625" />
        <stop offset={1} stopColor="#FE5353" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconRigissSizeS;
