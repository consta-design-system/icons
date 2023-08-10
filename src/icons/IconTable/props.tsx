import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTableSizeM from './IconTable_size_m';
import IconTableSizeS from './IconTable_size_s';
import IconTableSizeXs from './IconTable_size_xs';

const props: CreateIconArguments = {
  l: IconTableSizeM,
  m: IconTableSizeM,
  s: IconTableSizeS,
  xs: IconTableSizeXs,
  name: 'IconTable',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
