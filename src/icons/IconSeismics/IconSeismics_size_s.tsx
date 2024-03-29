import * as React from 'react';
import { SVGProps } from 'react';

const IconSeismicsSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={2}
      y={2}
      width={12}
      height={12}
      rx={1}
      fill="var(--color-bg-ghost)"
    />
    <path
      d="M2 7.257v-1.2a20.126 20.126 0 0 1 1.776-1.004C5.305 4.289 7.386 3.5 9.5 3.5c2.141 0 3.516.809 4.354 1.646.05.051.1.102.146.153v1.794l-.01-.025a3.258 3.258 0 0 0-.146-.294 4.194 4.194 0 0 0-.697-.92C12.483 5.19 11.358 4.5 9.5 4.5c-1.887 0-3.805.711-5.276 1.447A19.098 19.098 0 0 0 2 7.257Z"
      fill="var(--color-bg-warning)"
    />
    <path
      d="M2 9.187v2.125c.253-.15.52-.324.807-.512C4.218 9.88 6.091 8.656 9 8.656c2.5 0 4.167 1.77 5 2.656V9.187S10.5 6 6.5 6 2 9.187 2 9.187Z"
      fill="var(--color-bg-normal)"
    />
    <path
      d="M2 12.771v-1.135c.227-.111.502-.233.824-.354 1.053-.395 2.612-.782 4.676-.782a18.083 18.083 0 0 1 6.5 1.24v1.081a15.728 15.728 0 0 0-1.644-.592A17.084 17.084 0 0 0 7.5 11.5c-1.936 0-3.377.363-4.324.718A7.614 7.614 0 0 0 2 12.771Z"
      fill="var(--color-bg-alert)"
    />
  </svg>
);
export default IconSeismicsSizeS;
