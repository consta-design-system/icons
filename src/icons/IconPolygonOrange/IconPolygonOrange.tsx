import { createIcon } from '../createIcon/createIcon';
import IconPolygonOrangeSizeS from './IconPolygonOrange_size_s';

export const IconPolygonOrange = createIcon({
  l: IconPolygonOrangeSizeS,
  m: IconPolygonOrangeSizeS,
  s: IconPolygonOrangeSizeS,
  xs: IconPolygonOrangeSizeS,
  name: 'IconPolygonOrange',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
