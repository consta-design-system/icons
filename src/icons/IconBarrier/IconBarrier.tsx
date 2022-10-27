import { createIcon } from '../createIcon/createIcon';
import IconBarrierSizeM from './IconBarrier_size_m';
import IconBarrierSizeS from './IconBarrier_size_s';
import IconBarrierSizeXs from './IconBarrier_size_xs';

export const IconBarrier = createIcon({
  l: IconBarrierSizeM,
  m: IconBarrierSizeM,
  s: IconBarrierSizeS,
  xs: IconBarrierSizeXs,
  name: 'IconBarrier',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
