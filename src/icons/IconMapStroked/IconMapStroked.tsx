import { createIcon } from '../createIcon/createIcon';
import IconMapStrokedSizeM from './IconMapStroked_size_m';
import IconMapStrokedSizeS from './IconMapStroked_size_s';
import IconMapStrokedSizeXs from './IconMapStroked_size_xs';

export const IconMapStroked = createIcon({
  l: IconMapStrokedSizeM,
  m: IconMapStrokedSizeM,
  s: IconMapStrokedSizeS,
  xs: IconMapStrokedSizeXs,
  name: 'IconMapStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
