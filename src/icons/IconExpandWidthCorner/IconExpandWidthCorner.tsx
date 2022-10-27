import { createIcon } from '../createIcon/createIcon';
import IconExpandWidthCornerSizeM from './IconExpandWidthCorner_size_m';
import IconExpandWidthCornerSizeS from './IconExpandWidthCorner_size_s';
import IconExpandWidthCornerSizeXs from './IconExpandWidthCorner_size_xs';

export const IconExpandWidthCorner = createIcon({
  l: IconExpandWidthCornerSizeM,
  m: IconExpandWidthCornerSizeM,
  s: IconExpandWidthCornerSizeS,
  xs: IconExpandWidthCornerSizeXs,
  name: 'IconExpandWidthCorner',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
