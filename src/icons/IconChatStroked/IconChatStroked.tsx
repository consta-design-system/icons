import { createIcon } from '../createIcon/createIcon';
import IconChatStrokedSizeM from './IconChatStroked_size_m';
import IconChatStrokedSizeS from './IconChatStroked_size_s';
import IconChatStrokedSizeXs from './IconChatStroked_size_xs';

export const IconChatStroked = createIcon({
  l: IconChatStrokedSizeM,
  m: IconChatStrokedSizeM,
  s: IconChatStrokedSizeS,
  xs: IconChatStrokedSizeXs,
  name: 'IconChatStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
