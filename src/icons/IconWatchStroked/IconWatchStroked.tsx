import { createIcon } from '../Icon';
import IconWatchStrokedSizeL from './IconWatchStroked_size_l';
import IconWatchStrokedSizeM from './IconWatchStroked_size_m';
import IconWatchStrokedSizeS from './IconWatchStroked_size_s';
import IconWatchStrokedSizeXs from './IconWatchStroked_size_xs';

export const IconWatchStroked = createIcon({
  l: IconWatchStrokedSizeL,
  m: IconWatchStrokedSizeM,
  s: IconWatchStrokedSizeS,
  xs: IconWatchStrokedSizeXs,
  name: 'IconWatchStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
