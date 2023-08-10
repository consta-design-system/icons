import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTable2SizeM from './IconTable2_size_m';
import IconTable2SizeS from './IconTable2_size_s';
import IconTable2SizeXs from './IconTable2_size_xs';

const props: CreateIconArguments = {
  l: IconTable2SizeM,
  m: IconTable2SizeM,
  s: IconTable2SizeS,
  xs: IconTable2SizeXs,
  name: 'IconTable2',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
