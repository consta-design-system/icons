import { createIcon } from '../Icon';
import IconRUOSizeM from './IconRUO_size_m';
import IconRUOSizeS from './IconRUO_size_s';
import IconRUOSizeXs from './IconRUO_size_xs';

export const IconRUO = createIcon({
  l: IconRUOSizeM,
  m: IconRUOSizeM,
  s: IconRUOSizeS,
  xs: IconRUOSizeXs,
  name: 'IconRUO',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
