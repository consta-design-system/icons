import { createIcon } from '../Icon';
import IconNodeStartSizeM from './IconNodeStart_size_m';
import IconNodeStartSizeS from './IconNodeStart_size_s';
import IconNodeStartSizeXs from './IconNodeStart_size_xs';

export const IconNodeStart = createIcon({
  l: IconNodeStartSizeM,
  m: IconNodeStartSizeM,
  s: IconNodeStartSizeS,
  xs: IconNodeStartSizeXs,
  name: 'IconNodeStart',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
