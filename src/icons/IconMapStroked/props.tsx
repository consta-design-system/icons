import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMapStrokedSizeL from './IconMapStroked_size_l';
import IconMapStrokedSizeM from './IconMapStroked_size_m';
import IconMapStrokedSizeS from './IconMapStroked_size_s';
import IconMapStrokedSizeXs from './IconMapStroked_size_xs';

const props: CreateIconArguments = {
  l: IconMapStrokedSizeL,
  m: IconMapStrokedSizeM,
  s: IconMapStrokedSizeS,
  xs: IconMapStrokedSizeXs,
  name: 'IconMapStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
