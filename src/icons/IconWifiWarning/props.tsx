import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWifiWarningSizeM from './IconWifiWarning_size_m';
import IconWifiWarningSizeS from './IconWifiWarning_size_s';
import IconWifiWarningSizeXs from './IconWifiWarning_size_xs';

const props: CreateIconArguments = {
  l: IconWifiWarningSizeM,
  m: IconWifiWarningSizeM,
  s: IconWifiWarningSizeS,
  xs: IconWifiWarningSizeXs,
  name: 'IconWifiWarning',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
