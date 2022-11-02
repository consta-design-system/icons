import { createIcon } from '../Icon';
import IconWideScreenStrokedSizeM from './IconWideScreenStroked_size_m';
import IconWideScreenStrokedSizeS from './IconWideScreenStroked_size_s';
import IconWideScreenStrokedSizeXs from './IconWideScreenStroked_size_xs';

export const IconWideScreenStroked = createIcon({
  l: IconWideScreenStrokedSizeM,
  m: IconWideScreenStrokedSizeM,
  s: IconWideScreenStrokedSizeS,
  xs: IconWideScreenStrokedSizeXs,
  name: 'IconWideScreenStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
