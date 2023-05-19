import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsBuildTurnSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 20C11.0589 20 3 11.9411 3 2"
      stroke="url(#paint0_linear_3200_379)"
      strokeWidth={2}
    />
    <rect
      x={22}
      y={22}
      width={4}
      height={4}
      transform="rotate(-180 22 22)"
      fill="var(--color-typo-primary)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3200_379"
        x1={20.5}
        y1={19}
        x2={3}
        y2={1.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.171429} stopColor="#93C5E5" />
        <stop offset={1} stopColor="#93C5E5" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconToolsBuildTurnSizeM;
