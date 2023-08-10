import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconUserSizeL from './IconUser_size_l';
import IconUserSizeM from './IconUser_size_m';
import IconUserSizeS from './IconUser_size_s';
import IconUserSizeXs from './IconUser_size_xs';

const props: CreateIconArguments = {
  l: IconUserSizeL,
  m: IconUserSizeM,
  s: IconUserSizeS,
  xs: IconUserSizeXs,
  name: 'IconUser',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
