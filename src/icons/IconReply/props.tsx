import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconReplySizeM from './IconReply_size_m';
import IconReplySizeS from './IconReply_size_s';
import IconReplySizeXs from './IconReply_size_xs';

const props: CreateIconArguments = {
  l: IconReplySizeM,
  m: IconReplySizeM,
  s: IconReplySizeS,
  xs: IconReplySizeXs,
  name: 'IconReply',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
