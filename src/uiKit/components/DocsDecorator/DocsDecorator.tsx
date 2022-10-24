import './DocsDecorator.css';
import '../../whitepaper/whitepaper.css';

import { presetGpnDefault, Theme } from '@consta/uikit/Theme';
import React from 'react';

import { cn } from '../../cn';

export const cnDocsDecorator = cn('DocsDecorator');

export const DocsDecorator: React.FC<{ children?: React.ReactNode }> = (
  props,
) => {
  const { children } = props;
  const content = (
    <Theme
      preset={presetGpnDefault}
      className={cnDocsDecorator(null, ['theme_gap_medium'])}
    >
      {children}
    </Theme>
  );
  if (process.env.NODE_ENV === 'development') {
    return <React.StrictMode>{content}</React.StrictMode>;
  }

  return content;
};
