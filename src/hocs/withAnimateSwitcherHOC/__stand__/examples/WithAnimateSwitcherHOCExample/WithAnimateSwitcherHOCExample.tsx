import { Example } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import { useFlag } from '@consta/uikit/useFlag';
import React from 'react';

import { AnimateIconSwitcherProvider } from '##/components/AnimateIconSwitcherProvider';
import { withAnimateSwitcherHOC } from '##/hocs/withAnimateSwitcherHOC';
import { IconAdd } from '##/icons/IconAdd';
import { IconTrash } from '##/icons/IconTrash';

const MyAnimateIcon = withAnimateSwitcherHOC({
  startIcon: IconAdd,
  endIcon: IconTrash,
});

export const WithAnimateSwitcherHOCExample = () => {
  const [state, setState] = useFlag();
  return (
    <Example>
      <AnimateIconSwitcherProvider active={state}>
        <Button
          size="l"
          onClick={setState.toggle}
          iconLeft={MyAnimateIcon}
          label={state ? 'Удалить' : 'Добавить'}
        />
      </AnimateIconSwitcherProvider>
    </Example>
  );
};
