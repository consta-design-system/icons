import { createIcon } from '../Icon';
import IconLentaFilledSizeM from './IconLentaFilled_size_m';
import IconLentaFilledSizeS from './IconLentaFilled_size_s';
import IconLentaFilledSizeXs from './IconLentaFilled_size_xs';

export const IconLentaFilled = createIcon({
  l: IconLentaFilledSizeM,
  m: IconLentaFilledSizeM,
  s: IconLentaFilledSizeS,
  xs: IconLentaFilledSizeXs,
  name: 'IconLentaFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
