import { createIcon } from '../createIcon/createIcon';
import IconGisMultipleSizeS from './IconGisMultiple_size_s';

export const IconGisMultiple = createIcon({
  l: IconGisMultipleSizeS,
  m: IconGisMultipleSizeS,
  s: IconGisMultipleSizeS,
  xs: IconGisMultipleSizeS,
  name: 'IconGisMultiple',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
