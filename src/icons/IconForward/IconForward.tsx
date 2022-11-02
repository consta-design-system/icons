import { createIcon } from '../Icon';
import IconForwardSizeM from './IconForward_size_m';
import IconForwardSizeS from './IconForward_size_s';
import IconForwardSizeXs from './IconForward_size_xs';

export const IconForward = createIcon({
  l: IconForwardSizeM,
  m: IconForwardSizeM,
  s: IconForwardSizeS,
  xs: IconForwardSizeXs,
  name: 'IconForward',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
