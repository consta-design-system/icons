import './AnimateIconBase.variants.css';

import { useSelect } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import React, { useEffect, useMemo, useState } from 'react';

import {
  IconComponent,
  iconPropSize,
  iconPropSizeDefault,
  iconPropView,
  iconPropViewDefault,
} from '##/icons/Icon';
import { IconAlert } from '##/icons/IconAlert';
import { IconArrowDown } from '##/icons/IconArrowDown';
import { IconDinosaur } from '##/icons/IconDinosaur';
import { cn } from '##/utils/bem';

import { AnimateIconBase } from '../AnimateIconBase';

const transitions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const cnAnimateIconBaseVariants = cn('AnimateIconBaseVariants');

const Variants = () => {
  const transition = useSelect('transition', transitions, 200);
  const icons = useSelect('icons', [1, 2, 3], 1);
  const size = useSelect('size', iconPropSize, iconPropSizeDefault);
  const view = useSelect('view', iconPropView, iconPropViewDefault);

  const [activeIndex, setActiveIndex] = useState(0);

  const { array, directions } = useMemo<{
    array: IconComponent[];
    directions: number[];
  }>(() => {
    if (icons === 1) {
      return {
        array: [IconArrowDown],
        directions: [0, 90, 180, 270],
      };
    }
    if (icons === 2) {
      return {
        array: [IconArrowDown, IconAlert],
        directions: [],
      };
    }
    return {
      array: [IconArrowDown, IconAlert, IconDinosaur],
      directions: [],
    };
  }, [icons]);

  const onClick = () => {
    if (icons === 2) {
      setActiveIndex(activeIndex + 1 > 1 ? 0 : activeIndex + 1);
      return;
    }
    if (icons === 1) {
      setActiveIndex(activeIndex + 1 > 3 ? 0 : activeIndex + 1);
      return;
    }
    setActiveIndex(activeIndex + 1 > 2 ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [icons]);

  return (
    <div className={cnAnimateIconBaseVariants()}>
      <AnimateIconBase
        transition={transition}
        directions={directions}
        activeIndex={activeIndex}
        icons={array}
        size={size}
        view={view}
      />
      <Button label="Трансформировать" onClick={onClick} />
    </div>
  );
};

export default Variants;
