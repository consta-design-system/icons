import * as React from 'react';
import { SVGProps } from 'react';

const IconPolygonsSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.323 3.2 2 6.8 3.161 12l3.484 2 5.032-1.2L14 8.8 12.839 4 8.968 2 4.323 3.2Z"
      fill="var(--color-bg-ghost)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.028 1.468 4.243 2.193 1.262 5.216-2.53 4.36-5.435 1.295-3.847-2.208-1.255-5.62 2.542-3.94 5.02-1.296ZM4.637 3.635l-2.103 3.26L3.6 11.676l3.121 1.792 4.63-1.105 2.115-3.64-1.06-4.384-3.5-1.807-4.27 1.103Z"
      fill="var(--color-bg-ghost)"
    />
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={12}
      height={12}
    >
      <path
        d="M4.613 3.599 2.536 6.906l1.062 4.77 3.12 1.802 4.66-1.107 2.104-3.607-1.039-4.427-3.512-1.859-4.318 1.12Z"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m2.582 7.937-.319-.376-.318-.375.003-.003.008-.007.029-.025.11-.094a22.445 22.445 0 0 1 1.884-1.4c1.225-.814 2.91-1.759 4.7-2.228 1.795-.47 2.98-.306 3.743.033.379.168.64.374.812.547a1.902 1.902 0 0 1 .258.328l.006.01.002.004.001.001s.001.002-.436.254l-.437.253.001.002.002.003.001.003a.945.945 0 0 0-.11-.131 1.693 1.693 0 0 0-.521-.348c-.52-.23-1.472-.41-3.104.017-1.637.43-3.214 1.306-4.395 2.09a21.407 21.407 0 0 0-1.79 1.331 9.582 9.582 0 0 0-.1.084l-.023.021-.006.005h-.001Z"
        fill="var(--color-bg-warning)"
      />
      <path
        d="M6.4 6.467c-3.317.869-3.127 3.756-3.127 3.756l.403 1.806C4.752 10.95 6.075 8.94 8.977 8.18c2.074-.543 3.78.559 4.64 1.13l-.566-2.318s-3.333-1.394-6.65-.525Z"
        fill="var(--color-bg-normal)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m4.394 13.157-.426-.244a33.152 33.152 0 0 1-.426-.244l.002-.002.002-.003.005-.009a1.47 1.47 0 0 1 .062-.095c.04-.058.1-.136.18-.229.16-.186.404-.434.759-.707.71-.547 1.854-1.19 3.627-1.654a14.65 14.65 0 0 1 4.415-.471c.55.027.993.083 1.3.134a7.566 7.566 0 0 1 .453.088l.027.007.008.002h.004l-.137.49-.137.488h-.003l-.017-.005a6.725 6.725 0 0 0-.387-.075c-.275-.045-.68-.097-1.192-.122a13.669 13.669 0 0 0-4.117.44c-1.653.434-2.67 1.019-3.262 1.475-.297.228-.49.426-.604.559a1.969 1.969 0 0 0-.139.182l.001-.002.001-.002.001-.001Z"
        fill="var(--color-bg-alert)"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.028 1.468 4.243 2.193 1.262 5.216-2.53 4.36-5.435 1.295-3.847-2.208-1.255-5.62 2.542-3.94 5.02-1.296ZM4.637 3.635l-2.103 3.26L3.6 11.676l3.121 1.792 4.63-1.105 2.115-3.64-1.06-4.384-3.5-1.807-4.27 1.103Z"
      fill="var(--color-typo-primary)"
    />
  </svg>
);

export default IconPolygonsSizeS;