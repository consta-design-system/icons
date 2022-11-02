import { createIcon } from '../Icon';
import IconWorldFilledSizeM from './IconWorldFilled_size_m';
import IconWorldFilledSizeS from './IconWorldFilled_size_s';
import IconWorldFilledSizeXs from './IconWorldFilled_size_xs';

export const IconWorldFilled = createIcon({
  l: IconWorldFilledSizeM,
  m: IconWorldFilledSizeM,
  s: IconWorldFilledSizeS,
  xs: IconWorldFilledSizeXs,
  name: 'IconWorldFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
