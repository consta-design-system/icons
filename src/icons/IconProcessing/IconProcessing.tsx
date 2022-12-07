import { createIcon } from '../Icon';
import IconProcessingSizeL from './IconProcessing_size_l';
import IconProcessingSizeM from './IconProcessing_size_m';
import IconProcessingSizeS from './IconProcessing_size_s';
import IconProcessingSizeXs from './IconProcessing_size_xs';

export const IconProcessing = createIcon({
  l: IconProcessingSizeL,
  m: IconProcessingSizeM,
  s: IconProcessingSizeS,
  xs: IconProcessingSizeXs,
  name: 'IconProcessing',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
