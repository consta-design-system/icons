import { createIcon } from '../Icon';
import IconZoneOrangeSizeS from './IconZoneOrange_size_s';

export const IconZoneOrange = createIcon({
  l: IconZoneOrangeSizeS,
  m: IconZoneOrangeSizeS,
  s: IconZoneOrangeSizeS,
  xs: IconZoneOrangeSizeS,
  name: 'IconZoneOrange',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
