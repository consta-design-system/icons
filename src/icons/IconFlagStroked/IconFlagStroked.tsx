import { createIcon } from '../createIcon/createIcon';
import IconFlagStrokedSizeM from './IconFlagStroked_size_m';
import IconFlagStrokedSizeS from './IconFlagStroked_size_s';
import IconFlagStrokedSizeXs from './IconFlagStroked_size_xs';

export const IconFlagStroked = createIcon({
  l: IconFlagStrokedSizeM,
  m: IconFlagStrokedSizeM,
  s: IconFlagStrokedSizeS,
  xs: IconFlagStrokedSizeXs,
  name: 'IconFlagStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
