import { createIcon } from '../createIcon/createIcon';
import IconAxisXSizeS from './IconAxisX_size_s';

export const IconAxisX = createIcon({
  l: IconAxisXSizeS,
  m: IconAxisXSizeS,
  s: IconAxisXSizeS,
  xs: IconAxisXSizeS,
  name: 'IconAxisX',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
