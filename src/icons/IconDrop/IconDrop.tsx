import { createIcon } from '../Icon';
import IconDropSizeM from './IconDrop_size_m';
import IconDropSizeS from './IconDrop_size_s';
import IconDropSizeXs from './IconDrop_size_xs';

export const IconDrop = createIcon({
  l: IconDropSizeM,
  m: IconDropSizeM,
  s: IconDropSizeS,
  xs: IconDropSizeXs,
  name: 'IconDrop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
