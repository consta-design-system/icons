import { createIcon } from '../Icon';
import IconSmileFilledSizeL from './IconSmileFilled_size_l';
import IconSmileFilledSizeM from './IconSmileFilled_size_m';
import IconSmileFilledSizeS from './IconSmileFilled_size_s';
import IconSmileFilledSizeXs from './IconSmileFilled_size_xs';

export const IconSmileFilled = createIcon({
  l: IconSmileFilledSizeL,
  m: IconSmileFilledSizeM,
  s: IconSmileFilledSizeS,
  xs: IconSmileFilledSizeXs,
  name: 'IconSmileFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
