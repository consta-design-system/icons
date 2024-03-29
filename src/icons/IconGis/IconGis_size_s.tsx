import * as React from 'react';
import { SVGProps } from 'react';

const IconGisSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 2c.276 0 .5.207.5.462v11.077c0 .254-.224.461-.5.461s-.5-.207-.5-.461V2.462C3 2.207 3.224 2 3.5 2Z"
      fill="var(--color-typo-normal)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.508 2.208a.553.553 0 0 1 .714-.132L13 4.885 8.878 7.308l2.944 1.73-2.944 1.731 2.355 1.385-3.011 1.77a.553.553 0 0 1-.714-.132c-.156-.213-.09-.5.148-.64l1.7-.998L7 10.769l2.944-1.73L7 7.307l4.122-2.423-3.466-2.038c-.238-.14-.304-.426-.148-.639Z"
      fill="var(--color-typo-alert)"
    />
  </svg>
);
export default IconGisSizeS;
