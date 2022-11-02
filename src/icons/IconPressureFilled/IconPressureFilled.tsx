import { createIcon } from '../Icon';
import IconPressureFilledSizeM from './IconPressureFilled_size_m';
import IconPressureFilledSizeS from './IconPressureFilled_size_s';
import IconPressureFilledSizeXs from './IconPressureFilled_size_xs';

export const IconPressureFilled = createIcon({
  l: IconPressureFilledSizeM,
  m: IconPressureFilledSizeM,
  s: IconPressureFilledSizeS,
  xs: IconPressureFilledSizeXs,
  name: 'IconPressureFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
