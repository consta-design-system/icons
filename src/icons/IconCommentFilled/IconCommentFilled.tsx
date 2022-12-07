import { createIcon } from '../Icon';
import IconCommentFilledSizeL from './IconCommentFilled_size_l';
import IconCommentFilledSizeM from './IconCommentFilled_size_m';
import IconCommentFilledSizeXs from './IconCommentFilled_size_xs';

export const IconCommentFilled = createIcon({
  l: IconCommentFilledSizeL,
  m: IconCommentFilledSizeM,
  s: IconCommentFilledSizeM,
  xs: IconCommentFilledSizeXs,
  name: 'IconCommentFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
