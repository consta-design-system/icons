import { createIcon } from '../Icon';
import IconPlaySizeM from './IconPlay_size_m';
import IconPlaySizeS from './IconPlay_size_s';
import IconPlaySizeXs from './IconPlay_size_xs';

export const IconPlay = createIcon({
  l: IconPlaySizeM,
  m: IconPlaySizeM,
  s: IconPlaySizeS,
  xs: IconPlaySizeXs,
  name: 'IconPlay',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});