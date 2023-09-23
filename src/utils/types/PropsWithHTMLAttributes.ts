import {
  AsTagAttribute,
  AsTags,
} from '@consta/uikit/__internal__/src/utils/types/AsTags';

export type PropsWithHTMLAttributes<Props, HTMLElement> = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props | 'css'>;

export type PropsWithHTMLAttributesAndRef<Props, HTMLElement> =
  PropsWithHTMLAttributes<Props, HTMLElement> &
    React.RefAttributes<HTMLElement>;

export type PropsWithJsxAttributes<Props, As extends AsTags = 'div'> = Omit<
  Props & Omit<AsTagAttribute<As>, keyof Props>,
  'css'
>;
