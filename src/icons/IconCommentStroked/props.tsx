import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCommentStrokedSizeL from './IconCommentStroked_size_l';
import IconCommentStrokedSizeM from './IconCommentStroked_size_m';
import IconCommentStrokedSizeS from './IconCommentStroked_size_s';
import IconCommentStrokedSizeXs from './IconCommentStroked_size_xs';

const props: CreateIconArguments = {
  l: IconCommentStrokedSizeL,
  m: IconCommentStrokedSizeM,
  s: IconCommentStrokedSizeS,
  xs: IconCommentStrokedSizeXs,
  name: 'IconCommentStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
