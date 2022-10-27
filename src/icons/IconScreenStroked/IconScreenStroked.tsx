import { createIcon } from '../createIcon/createIcon';
import IconScreenStrokedSizeM from './IconScreenStroked_size_m';
import IconScreenStrokedSizeS from './IconScreenStroked_size_s';
import IconScreenStrokedSizeXs from './IconScreenStroked_size_xs';

export const IconScreenStroked = createIcon({
  l: IconScreenStrokedSizeM,
  m: IconScreenStrokedSizeM,
  s: IconScreenStrokedSizeS,
  xs: IconScreenStrokedSizeXs,
  name: 'IconScreenStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
