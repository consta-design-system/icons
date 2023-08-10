import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCommentFilledSizeL from './IconCommentFilled_size_l';
import IconCommentFilledSizeM from './IconCommentFilled_size_m';
import IconCommentFilledSizeXs from './IconCommentFilled_size_xs';

const props: CreateIconArguments = {
  l: IconCommentFilledSizeL,
  m: IconCommentFilledSizeM,
  s: IconCommentFilledSizeM,
  xs: IconCommentFilledSizeXs,
  name: 'IconCommentFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
