import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconNodeStartSizeM from './IconNodeStart_size_m';
import IconNodeStartSizeS from './IconNodeStart_size_s';
import IconNodeStartSizeXs from './IconNodeStart_size_xs';

const props: CreateIconArguments = {
  l: IconNodeStartSizeM,
  m: IconNodeStartSizeM,
  s: IconNodeStartSizeS,
  xs: IconNodeStartSizeXs,
  name: 'IconNodeStart',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
