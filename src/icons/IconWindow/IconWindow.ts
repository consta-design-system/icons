import { createIcon } from '../Icon';
import IconWindowSizeM from './IconWindow_size_m';
import IconWindowSizeS from './IconWindow_size_s';
import IconWindowSizeXs from './IconWindow_size_xs';

export const IconWindow = createIcon({
  l: IconWindowSizeM,
  m: IconWindowSizeM,
  s: IconWindowSizeS,
  xs: IconWindowSizeXs,
  name: 'IconWindow',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
