import { createIcon } from '../Icon';
import IconTargetSizeM from './IconTarget_size_m';
import IconTargetSizeS from './IconTarget_size_s';
import IconTargetSizeXs from './IconTarget_size_xs';

export const IconTarget = createIcon({
  l: IconTargetSizeM,
  m: IconTargetSizeM,
  s: IconTargetSizeS,
  xs: IconTargetSizeXs,
  name: 'IconTarget',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
