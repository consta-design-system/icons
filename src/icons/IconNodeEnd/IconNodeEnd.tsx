import { createIcon } from '../Icon';
import IconNodeEndSizeM from './IconNodeEnd_size_m';
import IconNodeEndSizeS from './IconNodeEnd_size_s';
import IconNodeEndSizeXs from './IconNodeEnd_size_xs';

export const IconNodeEnd = createIcon({
  l: IconNodeEndSizeM,
  m: IconNodeEndSizeM,
  s: IconNodeEndSizeS,
  xs: IconNodeEndSizeXs,
  name: 'IconNodeEnd',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
