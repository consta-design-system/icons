import { createIcon } from '../createIcon/createIcon';
import IconInstagramFilledSizeM from './IconInstagramFilled_size_m';
import IconInstagramFilledSizeS from './IconInstagramFilled_size_s';
import IconInstagramFilledSizeXs from './IconInstagramFilled_size_xs';

export const IconInstagramFilled = createIcon({
  l: IconInstagramFilledSizeM,
  m: IconInstagramFilledSizeM,
  s: IconInstagramFilledSizeS,
  xs: IconInstagramFilledSizeXs,
  name: 'IconInstagramFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
