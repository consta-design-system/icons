import { createIcon } from '../Icon';
import IconDataSizeS from './IconData_size_s';

export const IconData = createIcon({
  l: IconDataSizeS,
  m: IconDataSizeS,
  s: IconDataSizeS,
  xs: IconDataSizeS,
  name: 'IconData',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
