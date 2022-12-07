import { createIcon } from '../Icon';
import IconThumbUpSizeL from './IconThumbUp_size_l';
import IconThumbUpSizeM from './IconThumbUp_size_m';
import IconThumbUpSizeS from './IconThumbUp_size_s';
import IconThumbUpSizeXs from './IconThumbUp_size_xs';

export const IconThumbUp = createIcon({
  l: IconThumbUpSizeL,
  m: IconThumbUpSizeM,
  s: IconThumbUpSizeS,
  xs: IconThumbUpSizeXs,
  name: 'IconThumbUp',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
