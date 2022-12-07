import { createIcon } from '../Icon';
import IconDataNullSizeL from './IconDataNull_size_l';
import IconDataNullSizeM from './IconDataNull_size_m';
import IconDataNullSizeS from './IconDataNull_size_s';
import IconDataNullSizeXs from './IconDataNull_size_xs';

export const IconDataNull = createIcon({
  l: IconDataNullSizeL,
  m: IconDataNullSizeM,
  s: IconDataNullSizeS,
  xs: IconDataNullSizeXs,
  name: 'IconDataNull',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
