import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSmileStrokedSizeL from './IconSmileStroked_size_l';
import IconSmileStrokedSizeM from './IconSmileStroked_size_m';
import IconSmileStrokedSizeS from './IconSmileStroked_size_s';
import IconSmileStrokedSizeXs from './IconSmileStroked_size_xs';

const props: CreateIconArguments = {
  l: IconSmileStrokedSizeL,
  m: IconSmileStrokedSizeM,
  s: IconSmileStrokedSizeS,
  xs: IconSmileStrokedSizeXs,
  name: 'IconSmileStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
