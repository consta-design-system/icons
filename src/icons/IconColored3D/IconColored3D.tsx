import { createIcon } from '../Icon';
import IconColored3DSizeS from './IconColored3D_size_s';

export const IconColored3D = createIcon({
  l: IconColored3DSizeS,
  m: IconColored3DSizeS,
  s: IconColored3DSizeS,
  xs: IconColored3DSizeS,
  name: 'IconColored3D',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
