import { createIcon } from '../createIcon/createIcon';
import IconInclinometrySizeS from './IconInclinometry_size_s';

export const IconInclinometry = createIcon({
  l: IconInclinometrySizeS,
  m: IconInclinometrySizeS,
  s: IconInclinometrySizeS,
  xs: IconInclinometrySizeS,
  name: 'IconInclinometry',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
