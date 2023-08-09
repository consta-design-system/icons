import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRUOSizeL from './IconRUO_size_l';
import IconRUOSizeM from './IconRUO_size_m';
import IconRUOSizeS from './IconRUO_size_s';
import IconRUOSizeXs from './IconRUO_size_xs';

const props: CreateIconArguments = {
  l: IconRUOSizeL,
  m: IconRUOSizeM,
  s: IconRUOSizeS,
  xs: IconRUOSizeXs,
  name: 'IconRUO',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
