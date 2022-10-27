import { createIcon } from '../createIcon/createIcon';
import IconMailSizeM from './IconMail_size_m';
import IconMailSizeS from './IconMail_size_s';
import IconMailSizeXs from './IconMail_size_xs';

export const IconMail = createIcon({
  l: IconMailSizeM,
  m: IconMailSizeM,
  s: IconMailSizeS,
  xs: IconMailSizeXs,
  name: 'IconMail',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
