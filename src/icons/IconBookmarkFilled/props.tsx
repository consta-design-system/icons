import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBookmarkFilledSizeL from './IconBookmarkFilled_size_l';
import IconBookmarkFilledSizeM from './IconBookmarkFilled_size_m';
import IconBookmarkFilledSizeS from './IconBookmarkFilled_size_s';
import IconBookmarkFilledSizeXs from './IconBookmarkFilled_size_xs';

const props: CreateIconArguments = {
  l: IconBookmarkFilledSizeL,
  m: IconBookmarkFilledSizeM,
  s: IconBookmarkFilledSizeS,
  xs: IconBookmarkFilledSizeXs,
  name: 'IconBookmarkFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
