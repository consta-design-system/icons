import { createIcon } from '../Icon';
import IconUnsortCenterSizeM from './IconUnsortCenter_size_m';
import IconUnsortCenterSizeS from './IconUnsortCenter_size_s';
import IconUnsortCenterSizeXs from './IconUnsortCenter_size_xs';

export const IconUnsortCenter = createIcon({
  l: IconUnsortCenterSizeM,
  m: IconUnsortCenterSizeM,
  s: IconUnsortCenterSizeS,
  xs: IconUnsortCenterSizeXs,
  name: 'IconUnsortCenter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
