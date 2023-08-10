import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconColumnsSizeM from './IconColumns_size_m';
import IconColumnsSizeS from './IconColumns_size_s';
import IconColumnsSizeXs from './IconColumns_size_xs';

const props: CreateIconArguments = {
  l: IconColumnsSizeM,
  m: IconColumnsSizeM,
  s: IconColumnsSizeS,
  xs: IconColumnsSizeXs,
  name: 'IconColumns',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
