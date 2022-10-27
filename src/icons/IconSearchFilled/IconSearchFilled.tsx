import { createIcon } from '../createIcon/createIcon';
import IconSearchFilledSizeM from './IconSearchFilled_size_m';
import IconSearchFilledSizeS from './IconSearchFilled_size_s';
import IconSearchFilledSizeXs from './IconSearchFilled_size_xs';

export const IconSearchFilled = createIcon({
  l: IconSearchFilledSizeM,
  m: IconSearchFilledSizeM,
  s: IconSearchFilledSizeS,
  xs: IconSearchFilledSizeXs,
  name: 'IconSearchFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
