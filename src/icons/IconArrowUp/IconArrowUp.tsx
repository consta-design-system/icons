import { createIcon } from '../Icon';
import IconArrowUpSizeM from './IconArrowUp_size_m';
import IconArrowUpSizeS from './IconArrowUp_size_s';
import IconArrowUpSizeXs from './IconArrowUp_size_xs';

export const IconArrowUp = createIcon({
  l: IconArrowUpSizeM,
  m: IconArrowUpSizeM,
  s: IconArrowUpSizeS,
  xs: IconArrowUpSizeXs,
  name: 'IconArrowUp',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
