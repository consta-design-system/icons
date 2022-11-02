import { createIcon } from '../Icon';
import IconPermeabilityMapSizeS from './IconPermeabilityMap_size_s';

export const IconPermeabilityMap = createIcon({
  l: IconPermeabilityMapSizeS,
  m: IconPermeabilityMapSizeS,
  s: IconPermeabilityMapSizeS,
  xs: IconPermeabilityMapSizeS,
  name: 'IconPermeabilityMap',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
