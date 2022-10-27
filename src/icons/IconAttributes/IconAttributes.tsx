import { createIcon } from '../createIcon/createIcon';
import IconAttributesSizeS from './IconAttributes_size_s';

export const IconAttributes = createIcon({
  l: IconAttributesSizeS,
  m: IconAttributesSizeS,
  s: IconAttributesSizeS,
  xs: IconAttributesSizeS,
  name: 'IconAttributes',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
