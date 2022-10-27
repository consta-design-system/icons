import { createIcon } from '../createIcon/createIcon';
import IconWellsSizeS from './IconWells_size_s';

export const IconWells = createIcon({
  l: IconWellsSizeS,
  m: IconWellsSizeS,
  s: IconWellsSizeS,
  xs: IconWellsSizeS,
  name: 'IconWells',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
