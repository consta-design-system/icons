import { createIcon } from '../Icon';
import IconSpeedSizeM from './IconSpeed_size_m';
import IconSpeedSizeS from './IconSpeed_size_s';
import IconSpeedSizeXs from './IconSpeed_size_xs';

export const IconSpeed = createIcon({
  l: IconSpeedSizeM,
  m: IconSpeedSizeM,
  s: IconSpeedSizeS,
  xs: IconSpeedSizeXs,
  name: 'IconSpeed',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});