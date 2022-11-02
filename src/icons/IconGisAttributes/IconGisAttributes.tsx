import { createIcon } from '../Icon';
import IconGisAttributesSizeS from './IconGisAttributes_size_s';

export const IconGisAttributes = createIcon({
  l: IconGisAttributesSizeS,
  m: IconGisAttributesSizeS,
  s: IconGisAttributesSizeS,
  xs: IconGisAttributesSizeS,
  name: 'IconGisAttributes',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
