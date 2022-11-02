import { createIcon } from '../Icon';
import IconWellOpenSizeM from './IconWellOpen_size_m';
import IconWellOpenSizeS from './IconWellOpen_size_s';
import IconWellOpenSizeXs from './IconWellOpen_size_xs';

export const IconWellOpen = createIcon({
  l: IconWellOpenSizeM,
  m: IconWellOpenSizeM,
  s: IconWellOpenSizeS,
  xs: IconWellOpenSizeXs,
  name: 'IconWellOpen',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
