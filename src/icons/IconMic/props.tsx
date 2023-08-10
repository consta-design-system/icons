import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMicSizeM from './IconMic_size_m';
import IconMicSizeS from './IconMic_size_s';
import IconMicSizeXs from './IconMic_size_xs';

const props: CreateIconArguments = {
  l: IconMicSizeM,
  m: IconMicSizeM,
  s: IconMicSizeS,
  xs: IconMicSizeXs,
  name: 'IconMic',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
