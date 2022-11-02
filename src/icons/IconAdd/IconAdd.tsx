import { createIcon } from '../Icon';
import IconAddSizeM from './IconAdd_size_m';
import IconAddSizeS from './IconAdd_size_s';
import IconAddSizeXs from './IconAdd_size_xs';

export const IconAdd = createIcon({
  l: IconAddSizeM,
  m: IconAddSizeM,
  s: IconAddSizeS,
  xs: IconAddSizeXs,
  name: 'IconAdd',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
