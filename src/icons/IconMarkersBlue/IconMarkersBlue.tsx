import { createIcon } from '../createIcon/createIcon';
import IconMarkersBlueSizeS from './IconMarkersBlue_size_s';

export const IconMarkersBlue = createIcon({
  l: IconMarkersBlueSizeS,
  m: IconMarkersBlueSizeS,
  s: IconMarkersBlueSizeS,
  xs: IconMarkersBlueSizeS,
  name: 'IconMarkersBlue',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
