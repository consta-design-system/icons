import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconStopSizeM from './IconStop_size_m';
import IconStopSizeS from './IconStop_size_s';
import IconStopSizeXs from './IconStop_size_xs';

const props: CreateIconArguments = {
  l: IconStopSizeM,
  m: IconStopSizeM,
  s: IconStopSizeS,
  xs: IconStopSizeXs,
  name: 'IconStop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
