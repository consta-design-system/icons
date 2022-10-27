import { createIcon } from '../createIcon/createIcon';
import IconSeismicsSizeS from './IconSeismics_size_s';

export const IconSeismics = createIcon({
  l: IconSeismicsSizeS,
  m: IconSeismicsSizeS,
  s: IconSeismicsSizeS,
  xs: IconSeismicsSizeS,
  name: 'IconSeismics',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
