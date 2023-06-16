import { Example } from '@consta/stand';
import { Badge, BadgePropStatus } from '@consta/uikit/Badge';
import React, { useState } from 'react';

import { AnimateIconBaseProvider } from '##/components/AnimateIconBaseProvider';
import { withAnimateBaseHOC } from '##/hocs/withAnimateBaseHOC';
import { IconAlert } from '##/icons/IconAlert';
import { IconQuestion } from '##/icons/IconQuestion';
import { IconWarning } from '##/icons/IconWarning';

type Status = {
  label: string;
  status: BadgePropStatus;
};

const statuses: Status[] = [
  {
    label: 'Ошибка',
    status: 'error',
  },
  {
    label: 'Предупреждение',
    status: 'warning',
  },
  {
    label: 'Вопрос',
    status: 'system',
  },
];

const MyAnimateIcon = withAnimateBaseHOC({
  icons: [IconAlert, IconWarning, IconQuestion],
});

export const WithAnimateBaseHOCExample = () => {
  const [state, setState] = useState(0);
  return (
    <Example>
      <AnimateIconBaseProvider activeIndex={state}>
        <Badge
          size="l"
          onClick={() => setState((state) => (state + 1 > 2 ? 0 : state + 1))}
          iconLeft={MyAnimateIcon}
          label={statuses[state].label}
          status={statuses[state].status}
        />
      </AnimateIconBaseProvider>
    </Example>
  );
};
