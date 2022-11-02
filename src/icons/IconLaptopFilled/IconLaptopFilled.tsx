import { createIcon } from '../Icon';
import IconLaptopFilledSizeM from './IconLaptopFilled_size_m';
import IconLaptopFilledSizeS from './IconLaptopFilled_size_s';
import IconLaptopFilledSizeXs from './IconLaptopFilled_size_xs';

export const IconLaptopFilled = createIcon({
  l: IconLaptopFilledSizeM,
  m: IconLaptopFilledSizeM,
  s: IconLaptopFilledSizeS,
  xs: IconLaptopFilledSizeXs,
  name: 'IconLaptopFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
