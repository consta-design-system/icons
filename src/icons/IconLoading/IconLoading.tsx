import { createIcon } from '../Icon';
import IconLoadingSizeM from './IconLoading_size_m';
import IconLoadingSizeS from './IconLoading_size_s';
import IconLoadingSizeXs from './IconLoading_size_xs';

export const IconLoading = createIcon({
  l: IconLoadingSizeM,
  m: IconLoadingSizeM,
  s: IconLoadingSizeS,
  xs: IconLoadingSizeXs,
  name: 'IconLoading',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
