import { createIcon } from '../Icon';
import IconGisSizeS from './IconGis_size_s';

export const IconGis = createIcon({
  l: IconGisSizeS,
  m: IconGisSizeS,
  s: IconGisSizeS,
  xs: IconGisSizeS,
  name: 'IconGis',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
