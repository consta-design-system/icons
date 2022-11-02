import { createIcon } from '../Icon';
import IconAttributeSizeS from './IconAttribute_size_s';

export const IconAttribute = createIcon({
  l: IconAttributeSizeS,
  m: IconAttributeSizeS,
  s: IconAttributeSizeS,
  xs: IconAttributeSizeS,
  name: 'IconAttribute',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
