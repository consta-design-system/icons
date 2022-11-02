import { createIcon } from '../Icon';
import IconSendMessageSizeM from './IconSendMessage_size_m';
import IconSendMessageSizeS from './IconSendMessage_size_s';
import IconSendMessageSizeXs from './IconSendMessage_size_xs';

export const IconSendMessage = createIcon({
  l: IconSendMessageSizeM,
  m: IconSendMessageSizeM,
  s: IconSendMessageSizeS,
  xs: IconSendMessageSizeXs,
  name: 'IconSendMessage',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
