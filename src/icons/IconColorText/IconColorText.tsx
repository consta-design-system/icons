import { createIcon } from '../Icon';
import IconColorTextSizeM from './IconColorText_size_m';
import IconColorTextSizeS from './IconColorText_size_s';
import IconColorTextSizeXs from './IconColorText_size_xs';

export const IconColorText = createIcon({
  l: IconColorTextSizeM,
  m: IconColorTextSizeM,
  s: IconColorTextSizeS,
  xs: IconColorTextSizeXs,
  name: 'IconColorText',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
