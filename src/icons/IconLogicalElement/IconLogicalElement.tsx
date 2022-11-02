import { createIcon } from '../Icon';
import IconLogicalElementSizeM from './IconLogicalElement_size_m';
import IconLogicalElementSizeS from './IconLogicalElement_size_s';
import IconLogicalElementSizeXs from './IconLogicalElement_size_xs';

export const IconLogicalElement = createIcon({
  l: IconLogicalElementSizeM,
  m: IconLogicalElementSizeM,
  s: IconLogicalElementSizeS,
  xs: IconLogicalElementSizeXs,
  name: 'IconLogicalElement',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
