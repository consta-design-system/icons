import { createIcon } from '../createIcon/createIcon';
import IconHomeSizeM from './IconHome_size_m';
import IconHomeSizeS from './IconHome_size_s';
import IconHomeSizeXs from './IconHome_size_xs';

export const IconHome = createIcon({
  l: IconHomeSizeM,
  m: IconHomeSizeM,
  s: IconHomeSizeS,
  xs: IconHomeSizeXs,
  name: 'IconHome',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
