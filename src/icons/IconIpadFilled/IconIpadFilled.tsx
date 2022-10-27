import { createIcon } from '../createIcon/createIcon';
import IconIpadFilledSizeM from './IconIpadFilled_size_m';
import IconIpadFilledSizeS from './IconIpadFilled_size_s';
import IconIpadFilledSizeXs from './IconIpadFilled_size_xs';

export const IconIpadFilled = createIcon({
  l: IconIpadFilledSizeM,
  m: IconIpadFilledSizeM,
  s: IconIpadFilledSizeS,
  xs: IconIpadFilledSizeXs,
  name: 'IconIpadFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
