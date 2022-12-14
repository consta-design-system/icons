import { createIcon } from '../Icon';
import IconInfoSizeL from './IconInfo_size_l';
import IconInfoSizeM from './IconInfo_size_m';
import IconInfoSizeS from './IconInfo_size_s';
import IconInfoSizeXs from './IconInfo_size_xs';

export const IconInfo = createIcon({
  l: IconInfoSizeL,
  m: IconInfoSizeM,
  s: IconInfoSizeS,
  xs: IconInfoSizeXs,
  name: 'IconInfo',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
