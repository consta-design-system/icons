import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDiamondSizeM from './IconDiamond_size_m';
import IconDiamondSizeS from './IconDiamond_size_s';
import IconDiamondSizeXs from './IconDiamond_size_xs';

const props: CreateIconArguments = {
  l: IconDiamondSizeM,
  m: IconDiamondSizeM,
  s: IconDiamondSizeS,
  xs: IconDiamondSizeXs,
  name: 'IconDiamond',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
