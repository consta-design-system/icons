import { createIcon } from '../Icon';
import IconStopSizeM from './IconStop_size_m';
import IconStopSizeS from './IconStop_size_s';
import IconStopSizeXs from './IconStop_size_xs';

export const IconStop = createIcon({
  l: IconStopSizeM,
  m: IconStopSizeM,
  s: IconStopSizeS,
  xs: IconStopSizeXs,
  name: 'IconStop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
