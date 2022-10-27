import { createIcon } from '../createIcon/createIcon';
import IconLayerYellowSizeS from './IconLayerYellow_size_s';

export const IconLayerYellow = createIcon({
  l: IconLayerYellowSizeS,
  m: IconLayerYellowSizeS,
  s: IconLayerYellowSizeS,
  xs: IconLayerYellowSizeS,
  name: 'IconLayerYellow',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
