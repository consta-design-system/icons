import { createIcon } from '../Icon';
import IconArrowFirstSizeM from './IconArrowFirst_size_m';
import IconArrowFirstSizeS from './IconArrowFirst_size_s';
import IconArrowFirstSizeXs from './IconArrowFirst_size_xs';

export const IconArrowFirst = createIcon({
  l: IconArrowFirstSizeM,
  m: IconArrowFirstSizeM,
  s: IconArrowFirstSizeS,
  xs: IconArrowFirstSizeXs,
  name: 'IconArrowFirst',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
