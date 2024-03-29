import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconChatStrokedSizeL from './IconChatStroked_size_l';
import IconChatStrokedSizeM from './IconChatStroked_size_m';
import IconChatStrokedSizeS from './IconChatStroked_size_s';
import IconChatStrokedSizeXs from './IconChatStroked_size_xs';

const props: CreateIconArguments = {
  l: IconChatStrokedSizeL,
  m: IconChatStrokedSizeM,
  s: IconChatStrokedSizeS,
  xs: IconChatStrokedSizeXs,
  name: 'IconChatStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
