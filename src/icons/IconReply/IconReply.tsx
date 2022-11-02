import { createIcon } from '../Icon';
import IconReplySizeM from './IconReply_size_m';
import IconReplySizeS from './IconReply_size_s';
import IconReplySizeXs from './IconReply_size_xs';

export const IconReply = createIcon({
  l: IconReplySizeM,
  m: IconReplySizeM,
  s: IconReplySizeS,
  xs: IconReplySizeXs,
  name: 'IconReply',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
