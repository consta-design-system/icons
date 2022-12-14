import { createIcon } from '../Icon';
import IconArrowRightSizeM from './IconArrowRight_size_m';
import IconArrowRightSizeS from './IconArrowRight_size_s';
import IconArrowRightSizeXs from './IconArrowRight_size_xs';

export const IconArrowRight = createIcon({
  l: IconArrowRightSizeM,
  m: IconArrowRightSizeM,
  s: IconArrowRightSizeS,
  xs: IconArrowRightSizeXs,
  name: 'IconArrowRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
