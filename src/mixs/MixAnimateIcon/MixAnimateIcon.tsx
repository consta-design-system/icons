import './MixAnimateIcon.css';

import { TransitionStatus } from 'react-transition-group';

import { AnimateIconBasePropDirection } from '##/components/AnimateIconBase/types';
import { cn } from '##/utils/bem';

type Props = {
  direction?: AnimateIconBasePropDirection;
  transform?: 'cubic' | 'rotate';
  animate?: TransitionStatus;
};

type CnMixAnimateIcon = (
  props: Props,
  classNames?: Array<string | undefined>,
) => string;

const cnAnimateIcon = cn('MixAnimateIcon');

export const cnMixAnimateIcon: CnMixAnimateIcon = (props, classNames = []) => {
  const { direction = 'up', transform = 'cubic', animate } = props;

  return cnAnimateIcon({ direction, transform, animate }, [...classNames]);
};
