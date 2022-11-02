import { createIcon } from '../Icon';
import IconToolsDiameterSizeS from './IconToolsDiameter_size_s';

export const IconToolsDiameter = createIcon({
  l: IconToolsDiameterSizeS,
  m: IconToolsDiameterSizeS,
  s: IconToolsDiameterSizeS,
  xs: IconToolsDiameterSizeS,
  name: 'IconToolsDiameter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
