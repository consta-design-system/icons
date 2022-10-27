import { createIcon } from '../createIcon/createIcon';
import IconDocFilledSizeM from './IconDocFilled_size_m';
import IconDocFilledSizeS from './IconDocFilled_size_s';
import IconDocFilledSizeXs from './IconDocFilled_size_xs';

export const IconDocFilled = createIcon({
  l: IconDocFilledSizeM,
  m: IconDocFilledSizeM,
  s: IconDocFilledSizeS,
  xs: IconDocFilledSizeXs,
  name: 'IconDocFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
