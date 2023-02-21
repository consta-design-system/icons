import { createIcon } from '../Icon';
import IconHelmetSizeM from './IconHelmet_size_m';
import IconHelmetSizeS from './IconHelmet_size_s';
import IconHelmetSizeXs from './IconHelmet_size_xs';

export const IconHelmet = createIcon({
  l: IconHelmetSizeM,
  m: IconHelmetSizeM,
  s: IconHelmetSizeS,
  xs: IconHelmetSizeXs,
  name: 'IconHelmet',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
