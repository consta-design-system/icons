import { createIcon } from '../Icon';
import IconExpandWidthSideSizeM from './IconExpandWidthSide_size_m';
import IconExpandWidthSideSizeS from './IconExpandWidthSide_size_s';
import IconExpandWidthSideSizeXs from './IconExpandWidthSide_size_xs';

export const IconExpandWidthSide = createIcon({
  l: IconExpandWidthSideSizeM,
  m: IconExpandWidthSideSizeM,
  s: IconExpandWidthSideSizeS,
  xs: IconExpandWidthSideSizeXs,
  name: 'IconExpandWidthSide',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
