import { createIcon } from '../Icon';
import IconDocDeleteSizeL from './IconDocDelete_size_l';
import IconDocDeleteSizeM from './IconDocDelete_size_m';
import IconDocDeleteSizeS from './IconDocDelete_size_s';
import IconDocDeleteSizeXs from './IconDocDelete_size_xs';

export const IconDocDelete = createIcon({
  l: IconDocDeleteSizeL,
  m: IconDocDeleteSizeM,
  s: IconDocDeleteSizeS,
  xs: IconDocDeleteSizeXs,
  name: 'IconDocDelete',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
