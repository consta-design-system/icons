import { createIcon } from '../Icon';
import IconLayersSizeM from './IconLayers_size_m';
import IconLayersSizeS from './IconLayers_size_s';
import IconLayersSizeXs from './IconLayers_size_xs';

export const IconLayers = createIcon({
  l: IconLayersSizeM,
  m: IconLayersSizeM,
  s: IconLayersSizeS,
  xs: IconLayersSizeXs,
  name: 'IconLayers',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});