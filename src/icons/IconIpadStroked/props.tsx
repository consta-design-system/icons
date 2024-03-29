import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconIpadStrokedSizeM from './IconIpadStroked_size_m';
import IconIpadStrokedSizeS from './IconIpadStroked_size_s';
import IconIpadStrokedSizeXs from './IconIpadStroked_size_xs';

const props: CreateIconArguments = {
  l: IconIpadStrokedSizeM,
  m: IconIpadStrokedSizeM,
  s: IconIpadStrokedSizeS,
  xs: IconIpadStrokedSizeXs,
  name: 'IconIpadStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
