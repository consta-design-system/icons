import { createIcon } from '../Icon';
import IconCommentStrokedSizeL from './IconCommentStroked_size_l';
import IconCommentStrokedSizeM from './IconCommentStroked_size_m';
import IconCommentStrokedSizeS from './IconCommentStroked_size_s';
import IconCommentStrokedSizeXs from './IconCommentStroked_size_xs';

export const IconCommentStroked = createIcon({
  l: IconCommentStrokedSizeL,
  m: IconCommentStrokedSizeM,
  s: IconCommentStrokedSizeS,
  xs: IconCommentStrokedSizeXs,
  name: 'IconCommentStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
