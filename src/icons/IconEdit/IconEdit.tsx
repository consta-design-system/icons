import { createIcon } from '../Icon';
import IconEditSizeM from './IconEdit_size_m';
import IconEditSizeS from './IconEdit_size_s';
import IconEditSizeXs from './IconEdit_size_xs';

export const IconEdit = createIcon({
  l: IconEditSizeM,
  m: IconEditSizeM,
  s: IconEditSizeS,
  xs: IconEditSizeXs,
  name: 'IconEdit',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
