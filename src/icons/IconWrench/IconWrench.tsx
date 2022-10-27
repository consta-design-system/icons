import { createIcon } from '../createIcon/createIcon';
import IconWrenchSizeM from './IconWrench_size_m';
import IconWrenchSizeS from './IconWrench_size_s';
import IconWrenchSizeXs from './IconWrench_size_xs';

export const IconWrench = createIcon({
  l: IconWrenchSizeM,
  m: IconWrenchSizeM,
  s: IconWrenchSizeS,
  xs: IconWrenchSizeXs,
  name: 'IconWrench',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
