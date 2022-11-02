import { createIcon } from '../Icon';
import IconVKontakteSizeM from './IconVKontakte_size_m';
import IconVKontakteSizeS from './IconVKontakte_size_s';
import IconVKontakteSizeXs from './IconVKontakte_size_xs';

export const IconVKontakte = createIcon({
  l: IconVKontakteSizeM,
  m: IconVKontakteSizeM,
  s: IconVKontakteSizeS,
  xs: IconVKontakteSizeXs,
  name: 'IconVKontakte',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
