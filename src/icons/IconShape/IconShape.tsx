import { createIcon } from '../Icon';
import IconShapeSizeM from './IconShape_size_m';
import IconShapeSizeS from './IconShape_size_s';
import IconShapeSizeXs from './IconShape_size_xs';

export const IconShape = createIcon({
  l: IconShapeSizeM,
  m: IconShapeSizeM,
  s: IconShapeSizeS,
  xs: IconShapeSizeXs,
  name: 'IconShape',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
