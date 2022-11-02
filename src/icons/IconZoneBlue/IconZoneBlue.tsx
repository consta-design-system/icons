import { createIcon } from '../Icon';
import IconZoneBlueSizeS from './IconZoneBlue_size_s';

export const IconZoneBlue = createIcon({
  l: IconZoneBlueSizeS,
  m: IconZoneBlueSizeS,
  s: IconZoneBlueSizeS,
  xs: IconZoneBlueSizeS,
  name: 'IconZoneBlue',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
