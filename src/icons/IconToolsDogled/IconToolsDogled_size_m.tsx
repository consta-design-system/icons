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
      d="M3 21C21 21 21 19.5 21 3L3 21Z"
      fill="url(#paint0_linear_3200_364)"
    />
    <path d="M3 21C20 21 21 20.5 21 3" stroke="#B5E2FC" strokeWidth={2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2929 4.46448L4.46448 7.2929L7.58582 10.4142L6 12.0001H12V6.00006L10.4142 7.58582L7.2929 4.46448Z"
      fill="var(--color-typo-primary)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3200_364"
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
