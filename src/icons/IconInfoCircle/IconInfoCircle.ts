import { createIcon } from '../Icon';
import IconInfoCircleSizeM from './IconInfoCircle_size_m';
import IconInfoCircleSizeS from './IconInfoCircle_size_s';
import IconInfoCircleSizeXs from './IconInfoCircle_size_xs';

export const IconInfoCircle = createIcon({
  l: IconInfoCircleSizeM,
  m: IconInfoCircleSizeM,
  s: IconInfoCircleSizeS,
  xs: IconInfoCircleSizeXs,
  name: 'IconInfoCircle',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});