import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRUSSizeM from './IconRUS_size_m';
import IconRUSSizeS from './IconRUS_size_s';
import IconRUSSizeXs from './IconRUS_size_xs';

const props: CreateIconArguments = {
  l: IconRUSSizeM,
  m: IconRUSSizeM,
  s: IconRUSSizeS,
  xs: IconRUSSizeXs,
  name: 'IconRUS',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
