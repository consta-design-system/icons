import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWifiOffSizeM from './IconWifiOff_size_m';
import IconWifiOffSizeS from './IconWifiOff_size_s';
import IconWifiOffSizeXs from './IconWifiOff_size_xs';

const props: CreateIconArguments = {
  l: IconWifiOffSizeM,
  m: IconWifiOffSizeM,
  s: IconWifiOffSizeS,
  xs: IconWifiOffSizeXs,
  name: 'IconWifiOff',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
