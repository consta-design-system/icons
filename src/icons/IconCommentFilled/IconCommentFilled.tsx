import { createIcon } from '../createIcon/createIcon';
import IconCommentFilledSizeM from './IconCommentFilled_size_m';
import IconCommentFilledSizeXs from './IconCommentFilled_size_xs';

export const IconCommentFilled = createIcon({
  l: IconCommentFilledSizeM,
  m: IconCommentFilledSizeM,
  s: IconCommentFilledSizeM,
  xs: IconCommentFilledSizeXs,
  name: 'IconCommentFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
