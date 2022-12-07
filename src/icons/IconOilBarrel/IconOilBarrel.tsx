import { createIcon } from '../Icon';
import IconOilBarrelSizeL from './IconOilBarrel_size_l';
import IconOilBarrelSizeM from './IconOilBarrel_size_m';
import IconOilBarrelSizeS from './IconOilBarrel_size_s';
import IconOilBarrelSizeXs from './IconOilBarrel_size_xs';

export const IconOilBarrel = createIcon({
  l: IconOilBarrelSizeL,
  m: IconOilBarrelSizeM,
  s: IconOilBarrelSizeS,
  xs: IconOilBarrelSizeXs,
  name: 'IconOilBarrel',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
