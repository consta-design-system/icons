import { createIcon } from '../Icon';
import IconPolygonsSizeS from './IconPolygons_size_s';

export const IconPolygons = createIcon({
  l: IconPolygonsSizeS,
  m: IconPolygonsSizeS,
  s: IconPolygonsSizeS,
  xs: IconPolygonsSizeS,
  name: 'IconPolygons',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
