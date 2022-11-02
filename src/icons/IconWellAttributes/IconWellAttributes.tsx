import { createIcon } from '../Icon';
import IconWellAttributesSizeS from './IconWellAttributes_size_s';

export const IconWellAttributes = createIcon({
  l: IconWellAttributesSizeS,
  m: IconWellAttributesSizeS,
  s: IconWellAttributesSizeS,
  xs: IconWellAttributesSizeS,
  name: 'IconWellAttributes',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
