import { createIcon } from '../Icon';
import IconMicSizeM from './IconMic_size_m';
import IconMicSizeS from './IconMic_size_s';
import IconMicSizeXs from './IconMic_size_xs';

export const IconMic = createIcon({
  l: IconMicSizeM,
  m: IconMicSizeM,
  s: IconMicSizeS,
  xs: IconMicSizeXs,
  name: 'IconMic',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
