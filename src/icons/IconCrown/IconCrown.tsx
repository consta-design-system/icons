import { createIcon } from '../createIcon/createIcon';
import IconCrownSizeM from './IconCrown_size_m';
import IconCrownSizeS from './IconCrown_size_s';
import IconCrownSizeXs from './IconCrown_size_xs';

export const IconCrown = createIcon({
  l: IconCrownSizeM,
  m: IconCrownSizeM,
  s: IconCrownSizeS,
  xs: IconCrownSizeXs,
  name: 'IconCrown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
