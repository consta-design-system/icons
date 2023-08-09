import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconUnlockSizeL from './IconUnlock_size_l';
import IconUnlockSizeM from './IconUnlock_size_m';
import IconUnlockSizeS from './IconUnlock_size_s';
import IconUnlockSizeXs from './IconUnlock_size_xs';

const props: CreateIconArguments = {
  l: IconUnlockSizeL,
  m: IconUnlockSizeM,
  s: IconUnlockSizeS,
  xs: IconUnlockSizeXs,
  name: 'IconUnlock',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
