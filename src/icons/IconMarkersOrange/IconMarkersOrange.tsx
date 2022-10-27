import { createIcon } from '../createIcon/createIcon';
import IconMarkersOrangeSizeS from './IconMarkersOrange_size_s';

export const IconMarkersOrange = createIcon({
  l: IconMarkersOrangeSizeS,
  m: IconMarkersOrangeSizeS,
  s: IconMarkersOrangeSizeS,
  xs: IconMarkersOrangeSizeS,
  name: 'IconMarkersOrange',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
