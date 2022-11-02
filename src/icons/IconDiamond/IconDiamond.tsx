import { createIcon } from '../Icon';
import IconDiamondSizeM from './IconDiamond_size_m';
import IconDiamondSizeS from './IconDiamond_size_s';
import IconDiamondSizeXs from './IconDiamond_size_xs';

export const IconDiamond = createIcon({
  l: IconDiamondSizeM,
  m: IconDiamondSizeM,
  s: IconDiamondSizeS,
  xs: IconDiamondSizeXs,
  name: 'IconDiamond',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
