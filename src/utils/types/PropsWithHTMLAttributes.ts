export type PropsWithHTMLAttributes<Props, HTMLElement> = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props | 'css'>;

export type PropsWithHTMLAttributesAndRef<Props, HTMLElement> =
  PropsWithHTMLAttributes<Props, HTMLElement> &
    React.RefAttributes<HTMLElement>;

export type PropsWithJsxAttributes<
  Props,
  As extends keyof JSX.IntrinsicElements = 'div',
> = Omit<Props & Omit<JSX.IntrinsicElements[As], keyof Props>, 'css'>;
