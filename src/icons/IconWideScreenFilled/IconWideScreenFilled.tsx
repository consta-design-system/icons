import { createIcon } from '../Icon';
import IconWideScreenFilledSizeM from './IconWideScreenFilled_size_m';
import IconWideScreenFilledSizeS from './IconWideScreenFilled_size_s';
import IconWideScreenFilledSizeXs from './IconWideScreenFilled_size_xs';

export const IconWideScreenFilled = createIcon({
  l: IconWideScreenFilledSizeM,
  m: IconWideScreenFilledSizeM,
  s: IconWideScreenFilledSizeS,
  xs: IconWideScreenFilledSizeXs,
  name: 'IconWideScreenFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
