import { createIcon } from '../Icon';
import IconBackwardSizeM from './IconBackward_size_m';
import IconBackwardSizeS from './IconBackward_size_s';
import IconBackwardSizeXs from './IconBackward_size_xs';

export const IconBackward = createIcon({
  l: IconBackwardSizeM,
  m: IconBackwardSizeM,
  s: IconBackwardSizeS,
  xs: IconBackwardSizeXs,
  name: 'IconBackward',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
