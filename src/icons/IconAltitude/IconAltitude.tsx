import { createIcon } from '../Icon';
import IconAltitudeSizeS from './IconAltitude_size_s';

export const IconAltitude = createIcon({
  l: IconAltitudeSizeS,
  m: IconAltitudeSizeS,
  s: IconAltitudeSizeS,
  xs: IconAltitudeSizeS,
  name: 'IconAltitude',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
