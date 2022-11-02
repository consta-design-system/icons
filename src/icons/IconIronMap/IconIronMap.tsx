import { createIcon } from '../Icon';
import IconIronMapSizeS from './IconIronMap_size_s';

export const IconIronMap = createIcon({
  l: IconIronMapSizeS,
  m: IconIronMapSizeS,
  s: IconIronMapSizeS,
  xs: IconIronMapSizeS,
  name: 'IconIronMap',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
