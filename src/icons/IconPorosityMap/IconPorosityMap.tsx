import { createIcon } from '../Icon';
import IconPorosityMapSizeS from './IconPorosityMap_size_s';

export const IconPorosityMap = createIcon({
  l: IconPorosityMapSizeS,
  m: IconPorosityMapSizeS,
  s: IconPorosityMapSizeS,
  xs: IconPorosityMapSizeS,
  name: 'IconPorosityMap',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
