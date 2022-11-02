import { createIcon } from '../Icon';
import IconSeismic2DSizeS from './IconSeismic2D_size_s';

export const IconSeismic2D = createIcon({
  l: IconSeismic2DSizeS,
  m: IconSeismic2DSizeS,
  s: IconSeismic2DSizeS,
  xs: IconSeismic2DSizeS,
  name: 'IconSeismic2D',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
