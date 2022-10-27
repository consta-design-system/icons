import { createIcon } from '../createIcon/createIcon';
import IconStringSizeM from './IconString_size_m';
import IconStringSizeS from './IconString_size_s';
import IconStringSizeXs from './IconString_size_xs';

export const IconString = createIcon({
  l: IconStringSizeM,
  m: IconStringSizeM,
  s: IconStringSizeS,
  xs: IconStringSizeXs,
  name: 'IconString',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
