import { createIcon } from '../Icon';
import IconMailSizeL from './IconMail_size_l';
import IconMailSizeM from './IconMail_size_m';
import IconMailSizeS from './IconMail_size_s';
import IconMailSizeXs from './IconMail_size_xs';

export const IconMail = createIcon({
  l: IconMailSizeL,
  m: IconMailSizeM,
  s: IconMailSizeS,
  xs: IconMailSizeXs,
  name: 'IconMail',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
