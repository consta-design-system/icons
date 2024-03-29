import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBagSizeL from './IconBag_size_l';
import IconBagSizeM from './IconBag_size_m';
import IconBagSizeS from './IconBag_size_s';
import IconBagSizeXs from './IconBag_size_xs';

const props: CreateIconArguments = {
  l: IconBagSizeL,
  m: IconBagSizeM,
  s: IconBagSizeS,
  xs: IconBagSizeXs,
  name: 'IconBag',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
