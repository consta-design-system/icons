import { createIcon } from '../Icon';
import IconEyeSizeM from './IconEye_size_m';
import IconEyeSizeS from './IconEye_size_s';
import IconEyeSizeXs from './IconEye_size_xs';

export const IconEye = createIcon({
  l: IconEyeSizeM,
  m: IconEyeSizeM,
  s: IconEyeSizeS,
  xs: IconEyeSizeXs,
  name: 'IconEye',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
