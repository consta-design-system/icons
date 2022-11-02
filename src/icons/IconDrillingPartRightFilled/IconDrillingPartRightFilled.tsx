import { createIcon } from '../Icon';
import IconDrillingPartRightFilledSizeM from './IconDrillingPartRightFilled_size_m';
import IconDrillingPartRightFilledSizeS from './IconDrillingPartRightFilled_size_s';
import IconDrillingPartRightFilledSizeXs from './IconDrillingPartRightFilled_size_xs';

export const IconDrillingPartRightFilled = createIcon({
  l: IconDrillingPartRightFilledSizeM,
  m: IconDrillingPartRightFilledSizeM,
  s: IconDrillingPartRightFilledSizeS,
  xs: IconDrillingPartRightFilledSizeXs,
  name: 'IconDrillingPartRightFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
