import { createIcon } from '../Icon';
import IconFilterSizeM from './IconFilter_size_m';
import IconFilterSizeS from './IconFilter_size_s';
import IconFilterSizeXs from './IconFilter_size_xs';

export const IconFilter = createIcon({
  l: IconFilterSizeM,
  m: IconFilterSizeM,
  s: IconFilterSizeS,
  xs: IconFilterSizeXs,
  name: 'IconFilter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});