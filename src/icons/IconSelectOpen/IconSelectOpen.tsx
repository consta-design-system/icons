import { createIcon } from '../createIcon/createIcon';
import IconSelectOpenSizeM from './IconSelectOpen_size_m';
import IconSelectOpenSizeS from './IconSelectOpen_size_s';
import IconSelectOpenSizeXs from './IconSelectOpen_size_xs';

export const IconSelectOpen = createIcon({
  l: IconSelectOpenSizeM,
  m: IconSelectOpenSizeM,
  s: IconSelectOpenSizeS,
  xs: IconSelectOpenSizeXs,
  name: 'IconSelectOpen',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
