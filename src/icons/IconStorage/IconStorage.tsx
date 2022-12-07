import { createIcon } from '../Icon';
import IconStorageSizeL from './IconStorage_size_l';
import IconStorageSizeM from './IconStorage_size_m';
import IconStorageSizeS from './IconStorage_size_s';
import IconStorageSizeXs from './IconStorage_size_xs';

export const IconStorage = createIcon({
  l: IconStorageSizeL,
  m: IconStorageSizeM,
  s: IconStorageSizeS,
  xs: IconStorageSizeXs,
  name: 'IconStorage',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
