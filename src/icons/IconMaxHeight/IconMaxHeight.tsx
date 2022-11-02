import { createIcon } from '../Icon';
import IconMaxHeightSizeM from './IconMaxHeight_size_m';
import IconMaxHeightSizeS from './IconMaxHeight_size_s';
import IconMaxHeightSizeXs from './IconMaxHeight_size_xs';

export const IconMaxHeight = createIcon({
  l: IconMaxHeightSizeM,
  m: IconMaxHeightSizeM,
  s: IconMaxHeightSizeS,
  xs: IconMaxHeightSizeXs,
  name: 'IconMaxHeight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
