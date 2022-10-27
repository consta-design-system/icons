import { createIcon } from '../createIcon/createIcon';
import IconWorldStrokedSizeM from './IconWorldStroked_size_m';
import IconWorldStrokedSizeS from './IconWorldStroked_size_s';
import IconWorldStrokedSizeXs from './IconWorldStroked_size_xs';

export const IconWorldStroked = createIcon({
  l: IconWorldStrokedSizeM,
  m: IconWorldStrokedSizeM,
  s: IconWorldStrokedSizeS,
  xs: IconWorldStrokedSizeXs,
  name: 'IconWorldStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
