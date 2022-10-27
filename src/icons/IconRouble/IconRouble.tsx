import { createIcon } from '../createIcon/createIcon';
import IconRoubleSizeM from './IconRouble_size_m';
import IconRoubleSizeS from './IconRouble_size_s';
import IconRoubleSizeXs from './IconRouble_size_xs';

export const IconRouble = createIcon({
  l: IconRoubleSizeM,
  m: IconRoubleSizeM,
  s: IconRoubleSizeS,
  xs: IconRoubleSizeXs,
  name: 'IconRouble',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
