import { createIcon } from '../Icon';
import IconLaptopStrokedSizeM from './IconLaptopStroked_size_m';
import IconLaptopStrokedSizeS from './IconLaptopStroked_size_s';
import IconLaptopStrokedSizeXs from './IconLaptopStroked_size_xs';

export const IconLaptopStroked = createIcon({
  l: IconLaptopStrokedSizeM,
  m: IconLaptopStrokedSizeM,
  s: IconLaptopStrokedSizeS,
  xs: IconLaptopStrokedSizeXs,
  name: 'IconLaptopStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
