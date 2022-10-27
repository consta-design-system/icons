import { createIcon } from '../createIcon/createIcon';
import IconMarkersSizeS from './IconMarkers_size_s';

export const IconMarkers = createIcon({
  l: IconMarkersSizeS,
  m: IconMarkersSizeS,
  s: IconMarkersSizeS,
  xs: IconMarkersSizeS,
  name: 'IconMarkers',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
