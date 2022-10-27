import * as React from 'react';
import { SVGProps } from 'react';

const IconPorositySizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 8.5h14" stroke="var(--color-typo-primary)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM13 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="var(--color-typo-primary)"
    />
    <path
      d="M5 5a2 2 0 1 1-4 0c0-1.5 2-4 2-4s2 2.5 2 4ZM10 5a2 2 0 1 1-4 0c0-1.5 2-4 2-4s2 2.5 2 4ZM15 5a2 2 0 1 1-4 0c0-1.5 2-4 2-4s2 2.5 2 4Z"
      fill="var(--color-typo-success)"
    />
  </svg>
);

export default IconPorositySizeS;
