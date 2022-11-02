import { createIcon } from '../Icon';
import Icon3DMapSizeS from './Icon3DMap_size_s';

export const Icon3DMap = createIcon({
  l: Icon3DMapSizeS,
  m: Icon3DMapSizeS,
  s: Icon3DMapSizeS,
  xs: Icon3DMapSizeS,
  name: 'Icon3DMap',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
