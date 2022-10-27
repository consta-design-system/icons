import { createIcon } from '../createIcon/createIcon';
import IconAxisZSizeS from './IconAxisZ_size_s';

export const IconAxisZ = createIcon({
  l: IconAxisZSizeS,
  m: IconAxisZSizeS,
  s: IconAxisZSizeS,
  xs: IconAxisZSizeS,
  name: 'IconAxisZ',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
