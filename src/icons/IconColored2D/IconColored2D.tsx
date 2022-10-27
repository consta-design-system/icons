import { createIcon } from '../createIcon/createIcon';
import IconColored2DSizeS from './IconColored2D_size_s';

export const IconColored2D = createIcon({
  l: IconColored2DSizeS,
  m: IconColored2DSizeS,
  s: IconColored2DSizeS,
  xs: IconColored2DSizeS,
  name: 'IconColored2D',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
