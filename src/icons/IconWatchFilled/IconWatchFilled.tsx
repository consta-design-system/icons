import { createIcon } from '../Icon';
import IconWatchFilledSizeL from './IconWatchFilled_size_l';
import IconWatchFilledSizeM from './IconWatchFilled_size_m';
import IconWatchFilledSizeS from './IconWatchFilled_size_s';
import IconWatchFilledSizeXs from './IconWatchFilled_size_xs';

export const IconWatchFilled = createIcon({
  l: IconWatchFilledSizeL,
  m: IconWatchFilledSizeM,
  s: IconWatchFilledSizeS,
  xs: IconWatchFilledSizeXs,
  name: 'IconWatchFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
