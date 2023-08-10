import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconChatFilledSizeL from './IconChatFilled_size_l';
import IconChatFilledSizeM from './IconChatFilled_size_m';
import IconChatFilledSizeS from './IconChatFilled_size_s';
import IconChatFilledSizeXs from './IconChatFilled_size_xs';

const props: CreateIconArguments = {
  l: IconChatFilledSizeL,
  m: IconChatFilledSizeM,
  s: IconChatFilledSizeS,
  xs: IconChatFilledSizeXs,
  name: 'IconChatFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
