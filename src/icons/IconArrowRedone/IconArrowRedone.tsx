import { createIcon } from '../Icon';
import IconArrowRedoneSizeM from './IconArrowRedone_size_m';
import IconArrowRedoneSizeS from './IconArrowRedone_size_s';
import IconArrowRedoneSizeXs from './IconArrowRedone_size_xs';

export const IconArrowRedone = createIcon({
  l: IconArrowRedoneSizeM,
  m: IconArrowRedoneSizeM,
  s: IconArrowRedoneSizeS,
  xs: IconArrowRedoneSizeXs,
  name: 'IconArrowRedone',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});