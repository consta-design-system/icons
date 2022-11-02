import { createIcon } from '../Icon';
import IconPinSizeM from './IconPin_size_m';
import IconPinSizeS from './IconPin_size_s';
import IconPinSizeXs from './IconPin_size_xs';

export const IconPin = createIcon({
  l: IconPinSizeM,
  m: IconPinSizeM,
  s: IconPinSizeS,
  xs: IconPinSizeXs,
  name: 'IconPin',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
