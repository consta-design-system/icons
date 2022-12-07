import { createIcon } from '../Icon';
import IconFilterSizeL from './IconFilter_size_l';
import IconFilterSizeM from './IconFilter_size_m';
import IconFilterSizeS from './IconFilter_size_s';
import IconFilterSizeXs from './IconFilter_size_xs';

export const IconFilter = createIcon({
  l: IconFilterSizeL,
  m: IconFilterSizeM,
  s: IconFilterSizeS,
  xs: IconFilterSizeXs,
  name: 'IconFilter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
