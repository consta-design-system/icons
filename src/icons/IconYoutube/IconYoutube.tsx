import { createIcon } from '../createIcon/createIcon';
import IconYoutubeSizeM from './IconYoutube_size_m';
import IconYoutubeSizeS from './IconYoutube_size_s';
import IconYoutubeSizeXs from './IconYoutube_size_xs';

export const IconYoutube = createIcon({
  l: IconYoutubeSizeM,
  m: IconYoutubeSizeM,
  s: IconYoutubeSizeS,
  xs: IconYoutubeSizeXs,
  name: 'IconYoutube',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
