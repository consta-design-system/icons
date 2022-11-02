import { createIcon } from '../Icon';
import IconInstagramStrokedSizeM from './IconInstagramStroked_size_m';
import IconInstagramStrokedSizeS from './IconInstagramStroked_size_s';
import IconInstagramStrokedSizeXs from './IconInstagramStroked_size_xs';

export const IconInstagramStroked = createIcon({
  l: IconInstagramStrokedSizeM,
  m: IconInstagramStrokedSizeM,
  s: IconInstagramStrokedSizeS,
  xs: IconInstagramStrokedSizeXs,
  name: 'IconInstagramStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
