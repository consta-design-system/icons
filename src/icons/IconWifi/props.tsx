import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWifiSizeM from './IconWifi_size_m';
import IconWifiSizeS from './IconWifi_size_s';
import IconWifiSizeXs from './IconWifi_size_xs';

const props: CreateIconArguments = {
  l: IconWifiSizeM,
  m: IconWifiSizeM,
  s: IconWifiSizeS,
  xs: IconWifiSizeXs,
  name: 'IconWifi',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
