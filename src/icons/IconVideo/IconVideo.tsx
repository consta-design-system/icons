import { createIcon } from '../Icon';
import IconVideoSizeL from './IconVideo_size_l';
import IconVideoSizeM from './IconVideo_size_m';
import IconVideoSizeS from './IconVideo_size_s';
import IconVideoSizeXs from './IconVideo_size_xs';

export const IconVideo = createIcon({
  l: IconVideoSizeL,
  m: IconVideoSizeM,
  s: IconVideoSizeS,
  xs: IconVideoSizeXs,
  name: 'IconVideo',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
