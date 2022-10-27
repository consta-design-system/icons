import { createIcon } from '../createIcon/createIcon';
import IconColorFillSizeM from './IconColorFill_size_m';
import IconColorFillSizeS from './IconColorFill_size_s';
import IconColorFillSizeXs from './IconColorFill_size_xs';

export const IconColorFill = createIcon({
  l: IconColorFillSizeM,
  m: IconColorFillSizeM,
  s: IconColorFillSizeS,
  xs: IconColorFillSizeXs,
  name: 'IconColorFill',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
