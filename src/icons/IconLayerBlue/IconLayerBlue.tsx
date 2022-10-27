import { createIcon } from '../createIcon/createIcon';
import IconLayerBlueSizeS from './IconLayerBlue_size_s';

export const IconLayerBlue = createIcon({
  l: IconLayerBlueSizeS,
  m: IconLayerBlueSizeS,
  s: IconLayerBlueSizeS,
  xs: IconLayerBlueSizeS,
  name: 'IconLayerBlue',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
