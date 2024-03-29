import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFunnelRemoveSizeM from './IconFunnelRemove_size_m';
import IconFunnelRemoveSizeS from './IconFunnelRemove_size_s';
import IconFunnelRemoveSizeXs from './IconFunnelRemove_size_xs';

const props: CreateIconArguments = {
  l: IconFunnelRemoveSizeM,
  m: IconFunnelRemoveSizeM,
  s: IconFunnelRemoveSizeS,
  xs: IconFunnelRemoveSizeXs,
  name: 'IconFunnelRemove',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
