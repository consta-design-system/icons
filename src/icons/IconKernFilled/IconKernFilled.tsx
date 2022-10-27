import { createIcon } from '../createIcon/createIcon';
import IconKernFilledSizeM from './IconKernFilled_size_m';
import IconKernFilledSizeS from './IconKernFilled_size_s';
import IconKernFilledSizeXs from './IconKernFilled_size_xs';

export const IconKernFilled = createIcon({
  l: IconKernFilledSizeM,
  m: IconKernFilledSizeM,
  s: IconKernFilledSizeS,
  xs: IconKernFilledSizeXs,
  name: 'IconKernFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
