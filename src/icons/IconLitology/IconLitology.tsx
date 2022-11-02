import { createIcon } from '../Icon';
import IconLitologySizeS from './IconLitology_size_s';

export const IconLitology = createIcon({
  l: IconLitologySizeS,
  m: IconLitologySizeS,
  s: IconLitologySizeS,
  xs: IconLitologySizeS,
  name: 'IconLitology',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
