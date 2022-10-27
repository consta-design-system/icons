import { createIcon } from '../createIcon/createIcon';
import IconAxisYSizeS from './IconAxisY_size_s';

export const IconAxisY = createIcon({
  l: IconAxisYSizeS,
  m: IconAxisYSizeS,
  s: IconAxisYSizeS,
  xs: IconAxisYSizeS,
  name: 'IconAxisY',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
