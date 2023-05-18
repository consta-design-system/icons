import { createIcon } from '../Icon';
import IconArrowNextSizeM from './IconArrowNext_size_m';
import IconArrowNextSizeS from './IconArrowNext_size_s';
import IconArrowNextSizeXs from './IconArrowNext_size_xs';

export const IconArrowNext = createIcon({
  l: IconArrowNextSizeM,
  m: IconArrowNextSizeM,
  s: IconArrowNextSizeS,
  xs: IconArrowNextSizeXs,
  name: 'IconArrowNext',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
