import { createIcon } from '../Icon';
import IconKernStrokedSizeL from './IconKernStroked_size_l';
import IconKernStrokedSizeM from './IconKernStroked_size_m';
import IconKernStrokedSizeS from './IconKernStroked_size_s';
import IconKernStrokedSizeXs from './IconKernStroked_size_xs';

export const IconKernStroked = createIcon({
  l: IconKernStrokedSizeL,
  m: IconKernStrokedSizeM,
  s: IconKernStrokedSizeS,
  xs: IconKernStrokedSizeXs,
  name: 'IconKernStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
