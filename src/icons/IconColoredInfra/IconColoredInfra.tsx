import { createIcon } from '../createIcon/createIcon';
import IconColoredInfraSizeS from './IconColoredInfra_size_s';

export const IconColoredInfra = createIcon({
  l: IconColoredInfraSizeS,
  m: IconColoredInfraSizeS,
  s: IconColoredInfraSizeS,
  xs: IconColoredInfraSizeS,
  name: 'IconColoredInfra',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
