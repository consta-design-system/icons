import './AnimateIconSwitcher.variants.css';

import { useNumber, useSelect } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import { useFlag } from '@consta/uikit/useFlag';
import React from 'react';

import {
  iconPropSize,
  iconPropSizeDefault,
  iconPropView,
  iconPropViewDefault,
} from '##/icons/Icon';
import { IconAlert } from '##/icons/IconAlert';
import { IconArrowUp } from '##/icons/IconArrowUp';
import { IconDinosaur } from '##/icons/IconDinosaur';
import { cn } from '##/utils/bem';

import { AnimateIconSwitcher } from '../AnimateIconSwitcher';

const transitions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const mapIcon = {
  IconArrowUp,
  IconDinosaur,
  IconAlert,
};
const cnAnimateIconSwitcherVariants = cn('AnimateIconSwitcherVariants');

const Variants = () => {
  const [isOpen, setIsOpen] = useFlag();
  const transition = useSelect('transition', transitions, 200);
  const startIcon = useSelect(
    'startIcon',
    ['IconArrowUp', 'IconDinosaur', 'IconAlert'],
    'IconArrowUp',
  );
  const endIcon = useSelect('endIcon', [
    'IconArrowUp',
    'IconDinosaur',
    'IconAlert',
  ]);
  const startDirection = useNumber('startDirection', 0);
  const endDirection = useNumber('endDirection', 180);
  const size = useSelect('size', iconPropSize, iconPropSizeDefault);
  const view = useSelect('view', iconPropView, iconPropViewDefault);

  return (
    <div className={cnAnimateIconSwitcherVariants()}>
      <AnimateIconSwitcher
        active={isOpen}
        startIcon={startIcon ? mapIcon[startIcon] : undefined}
        endIcon={endIcon ? mapIcon[endIcon] : undefined}
        transition={transition}
        endDirection={endDirection}
        startDirection={startDirection}
        size={size}
        view={view}
      />
      <Button label="Трансформировать" onClick={setIsOpen.toggle} />
    </div>
  );
};

export default Variants;
