import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSendMessageSizeM from './IconSendMessage_size_m';
import IconSendMessageSizeS from './IconSendMessage_size_s';
import IconSendMessageSizeXs from './IconSendMessage_size_xs';

const props: CreateIconArguments = {
  l: IconSendMessageSizeM,
  m: IconSendMessageSizeM,
  s: IconSendMessageSizeS,
  xs: IconSendMessageSizeXs,
  name: 'IconSendMessage',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
