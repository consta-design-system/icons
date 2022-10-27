import { createIcon } from '../createIcon/createIcon';
import IconHealthSizeM from './IconHealth_size_m';
import IconHealthSizeS from './IconHealth_size_s';
import IconHealthSizeXs from './IconHealth_size_xs';

export const IconHealth = createIcon({
  l: IconHealthSizeM,
  m: IconHealthSizeM,
  s: IconHealthSizeS,
  xs: IconHealthSizeXs,
  name: 'IconHealth',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
