import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFunnelSizeM from './IconFunnel_size_m';
import IconFunnelSizeS from './IconFunnel_size_s';
import IconFunnelSizeXs from './IconFunnel_size_xs';

const props: CreateIconArguments = {
  l: IconFunnelSizeM,
  m: IconFunnelSizeM,
  s: IconFunnelSizeS,
  xs: IconFunnelSizeXs,
  name: 'IconFunnel',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
