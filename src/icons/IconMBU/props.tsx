import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMBUSizeL from './IconMBU_size_l';
import IconMBUSizeM from './IconMBU_size_m';
import IconMBUSizeS from './IconMBU_size_s';
import IconMBUSizeXs from './IconMBU_size_xs';

const props: CreateIconArguments = {
  l: IconMBUSizeL,
  m: IconMBUSizeM,
  s: IconMBUSizeS,
  xs: IconMBUSizeXs,
  name: 'IconMBU',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
