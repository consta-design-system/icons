import { createIcon } from '../Icon';
import IconArrowPreviousSizeM from './IconArrowPrevious_size_m';
import IconArrowPreviousSizeS from './IconArrowPrevious_size_s';
import IconArrowPreviousSizeXs from './IconArrowPrevious_size_xs';

export const IconArrowPrevious = createIcon({
  l: IconArrowPreviousSizeM,
  m: IconArrowPreviousSizeM,
  s: IconArrowPreviousSizeS,
  xs: IconArrowPreviousSizeXs,
  name: 'IconArrowPrevious',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
