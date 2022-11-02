import { createIcon } from '../Icon';
import IconToolsHoldSizeM from './IconToolsHold_size_m';

export const IconToolsHold = createIcon({
  l: IconToolsHoldSizeM,
  m: IconToolsHoldSizeM,
  s: IconToolsHoldSizeM,
  xs: IconToolsHoldSizeM,
  name: 'IconToolsHold',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
