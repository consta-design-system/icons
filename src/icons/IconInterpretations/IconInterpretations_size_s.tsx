import * as React from 'react';
import { SVGProps } from 'react';

const IconInterpretationsSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 2c.276 0 .5.207.5.462v11.077c0 .254-.224.461-.5.461s-.5-.207-.5-.461V2.462C7 2.207 7.224 2 7.5 2ZM11.5 2c.276 0 .5.207.5.462v11.077c0 .254-.224.461-.5.461s-.5-.207-.5-.461V2.462c0-.255.224-.462.5-.462ZM3.5 4c.276 0 .5.172.5.385v9.23c0 .213-.224.385-.5.385s-.5-.172-.5-.385v-9.23C3 4.172 3.224 4 3.5 4Z"
      fill="var(--color-typo-primary)"
    />
    <rect
      x={2}
      y={5}
      width={12}
      height={2}
      rx={1}
      fill="var(--color-typo-normal)"
    />
    <rect
      x={2}
      y={9}
      width={12}
      height={2}
      rx={1}
      fill="var(--color-typo-caution)"
    />
  </svg>
);
export default IconInterpretationsSizeS;
