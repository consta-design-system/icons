import { createIcon } from '../Icon';
import IconExitSizeM from './IconExit_size_m';
import IconExitSizeS from './IconExit_size_s';
import IconExitSizeXs from './IconExit_size_xs';

export const IconExit = createIcon({
  l: IconExitSizeM,
  m: IconExitSizeM,
  s: IconExitSizeS,
  xs: IconExitSizeXs,
  name: 'IconExit',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
