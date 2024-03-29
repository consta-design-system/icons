import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconOilBarrelSizeL from './IconOilBarrel_size_l';
import IconOilBarrelSizeM from './IconOilBarrel_size_m';
import IconOilBarrelSizeS from './IconOilBarrel_size_s';
import IconOilBarrelSizeXs from './IconOilBarrel_size_xs';

const props: CreateIconArguments = {
  l: IconOilBarrelSizeL,
  m: IconOilBarrelSizeM,
  s: IconOilBarrelSizeS,
  xs: IconOilBarrelSizeXs,
  name: 'IconOilBarrel',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
