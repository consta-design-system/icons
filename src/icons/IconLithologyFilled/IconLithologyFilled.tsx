import { createIcon } from '../Icon';
import IconLithologyFilledSizeM from './IconLithologyFilled_size_m';
import IconLithologyFilledSizeS from './IconLithologyFilled_size_s';
import IconLithologyFilledSizeXs from './IconLithologyFilled_size_xs';

export const IconLithologyFilled = createIcon({
  l: IconLithologyFilledSizeM,
  m: IconLithologyFilledSizeM,
  s: IconLithologyFilledSizeS,
  xs: IconLithologyFilledSizeXs,
  name: 'IconLithologyFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
