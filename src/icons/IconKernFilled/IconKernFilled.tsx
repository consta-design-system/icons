import { createIcon } from '../Icon';
import IconKernFilledSizeL from './IconKernFilled_size_l';
import IconKernFilledSizeM from './IconKernFilled_size_m';
import IconKernFilledSizeS from './IconKernFilled_size_s';
import IconKernFilledSizeXs from './IconKernFilled_size_xs';

export const IconKernFilled = createIcon({
  l: IconKernFilledSizeL,
  m: IconKernFilledSizeM,
  s: IconKernFilledSizeS,
  xs: IconKernFilledSizeXs,
  name: 'IconKernFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
