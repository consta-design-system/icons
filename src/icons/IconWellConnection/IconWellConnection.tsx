import { createIcon } from '../createIcon/createIcon';
import IconWellConnectionSizeS from './IconWellConnection_size_s';

export const IconWellConnection = createIcon({
  l: IconWellConnectionSizeS,
  m: IconWellConnectionSizeS,
  s: IconWellConnectionSizeS,
  xs: IconWellConnectionSizeS,
  name: 'IconWellConnection',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
