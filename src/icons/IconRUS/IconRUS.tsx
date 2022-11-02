import { createIcon } from '../Icon';
import IconRUSSizeM from './IconRUS_size_m';
import IconRUSSizeS from './IconRUS_size_s';
import IconRUSSizeXs from './IconRUS_size_xs';

export const IconRUS = createIcon({
  l: IconRUSSizeM,
  m: IconRUSSizeM,
  s: IconRUSSizeS,
  xs: IconRUSSizeXs,
  name: 'IconRUS',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
