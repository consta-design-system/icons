import { createIcon } from '../Icon';
import IconEyeCloseSizeM from './IconEyeClose_size_m';
import IconEyeCloseSizeS from './IconEyeClose_size_s';
import IconEyeCloseSizeXs from './IconEyeClose_size_xs';

export const IconEyeClose = createIcon({
  l: IconEyeCloseSizeM,
  m: IconEyeCloseSizeM,
  s: IconEyeCloseSizeS,
  xs: IconEyeCloseSizeXs,
  name: 'IconEyeClose',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
