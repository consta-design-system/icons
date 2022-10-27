import { createIcon } from '../createIcon/createIcon';
import IconSeismic3DSizeS from './IconSeismic3D_size_s';

export const IconSeismic3D = createIcon({
  l: IconSeismic3DSizeS,
  m: IconSeismic3DSizeS,
  s: IconSeismic3DSizeS,
  xs: IconSeismic3DSizeS,
  name: 'IconSeismic3D',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
