import { createIcon } from '../Icon';
import IconDocDeleteSizeM from './IconDocDelete_size_m';
import IconDocDeleteSizeS from './IconDocDelete_size_s';
import IconDocDeleteSizeXs from './IconDocDelete_size_xs';

export const IconDocDelete = createIcon({
  l: IconDocDeleteSizeM,
  m: IconDocDeleteSizeM,
  s: IconDocDeleteSizeS,
  xs: IconDocDeleteSizeXs,
  name: 'IconDocDelete',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});