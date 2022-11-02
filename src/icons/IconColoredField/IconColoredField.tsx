import { createIcon } from '../Icon';
import IconColoredFieldSizeXs from './IconColoredField_size_xs';

export const IconColoredField = createIcon({
  l: IconColoredFieldSizeXs,
  m: IconColoredFieldSizeXs,
  s: IconColoredFieldSizeXs,
  xs: IconColoredFieldSizeXs,
  name: 'IconColoredField',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
