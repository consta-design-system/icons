import { createIcon } from '../Icon';
import IconPhotoSizeM from './IconPhoto_size_m';
import IconPhotoSizeS from './IconPhoto_size_s';
import IconPhotoSizeXs from './IconPhoto_size_xs';

export const IconPhoto = createIcon({
  l: IconPhotoSizeM,
  m: IconPhotoSizeM,
  s: IconPhotoSizeS,
  xs: IconPhotoSizeXs,
  name: 'IconPhoto',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});