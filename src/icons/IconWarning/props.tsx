import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWarningSizeM from './IconWarning_size_m';
import IconWarningSizeS from './IconWarning_size_s';
import IconWarningSizeXs from './IconWarning_size_xs';

const props: CreateIconArguments = {
  l: IconWarningSizeM,
  m: IconWarningSizeM,
  s: IconWarningSizeS,
  xs: IconWarningSizeXs,
  name: 'IconWarning',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
