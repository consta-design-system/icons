import * as React from 'react';
import { SVGProps } from 'react';

const IconDotsSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="var(--color-bg-system)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="var(--color-typo-primary)"
    />
  </svg>
);
export default IconDotsSizeS;
