import { createIcon } from '../Icon';
import IconIntroductionSizeM from './IconIntroduction_size_m';
import IconIntroductionSizeS from './IconIntroduction_size_s';
import IconIntroductionSizeXs from './IconIntroduction_size_xs';

export const IconIntroduction = createIcon({
  l: IconIntroductionSizeM,
  m: IconIntroductionSizeM,
  s: IconIntroductionSizeS,
  xs: IconIntroductionSizeXs,
  name: 'IconIntroduction',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
