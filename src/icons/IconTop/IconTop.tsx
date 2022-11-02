import { createIcon } from '../Icon';
import IconTopSizeM from './IconTop_size_m';
import IconTopSizeS from './IconTop_size_s';
import IconTopSizeXs from './IconTop_size_xs';

export const IconTop = createIcon({
  l: IconTopSizeM,
  m: IconTopSizeM,
  s: IconTopSizeS,
  xs: IconTopSizeXs,
  name: 'IconTop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
