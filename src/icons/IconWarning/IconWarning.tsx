import { createIcon } from '../Icon';
import IconWarningSizeM from './IconWarning_size_m';
import IconWarningSizeS from './IconWarning_size_s';
import IconWarningSizeXs from './IconWarning_size_xs';

export const IconWarning = createIcon({
  l: IconWarningSizeM,
  m: IconWarningSizeM,
  s: IconWarningSizeS,
  xs: IconWarningSizeXs,
  name: 'IconWarning',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
