import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconHelmetSizeM from './IconHelmet_size_m';
import IconHelmetSizeS from './IconHelmet_size_s';
import IconHelmetSizeXs from './IconHelmet_size_xs';

const props: CreateIconArguments = {
  l: IconHelmetSizeM,
  m: IconHelmetSizeM,
  s: IconHelmetSizeS,
  xs: IconHelmetSizeXs,
  name: 'IconHelmet',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
