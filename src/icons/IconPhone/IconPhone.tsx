import { createIcon } from '../createIcon/createIcon';
import IconPhoneSizeM from './IconPhone_size_m';
import IconPhoneSizeS from './IconPhone_size_s';
import IconPhoneSizeXs from './IconPhone_size_xs';

export const IconPhone = createIcon({
  l: IconPhoneSizeM,
  m: IconPhoneSizeM,
  s: IconPhoneSizeS,
  xs: IconPhoneSizeXs,
  name: 'IconPhone',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
