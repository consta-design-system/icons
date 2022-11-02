import { createIcon } from '../Icon';
import IconIpadStrokedSizeM from './IconIpadStroked_size_m';
import IconIpadStrokedSizeS from './IconIpadStroked_size_s';
import IconIpadStrokedSizeXs from './IconIpadStroked_size_xs';

export const IconIpadStroked = createIcon({
  l: IconIpadStrokedSizeM,
  m: IconIpadStrokedSizeM,
  s: IconIpadStrokedSizeS,
  xs: IconIpadStrokedSizeXs,
  name: 'IconIpadStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
