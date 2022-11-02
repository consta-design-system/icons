import { createIcon } from '../Icon';
import IconPolygonMultipleSizeS from './IconPolygonMultiple_size_s';

export const IconPolygonMultiple = createIcon({
  l: IconPolygonMultipleSizeS,
  m: IconPolygonMultipleSizeS,
  s: IconPolygonMultipleSizeS,
  xs: IconPolygonMultipleSizeS,
  name: 'IconPolygonMultiple',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
