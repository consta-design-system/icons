import { createIcon } from '../Icon';
import IconAxesRotateSizeM from './IconAxesRotate_size_m';
import IconAxesRotateSizeS from './IconAxesRotate_size_s';
import IconAxesRotateSizeXs from './IconAxesRotate_size_xs';

export const IconAxesRotate = createIcon({
  l: IconAxesRotateSizeM,
  m: IconAxesRotateSizeM,
  s: IconAxesRotateSizeS,
  xs: IconAxesRotateSizeXs,
  name: 'IconAxesRotate',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
