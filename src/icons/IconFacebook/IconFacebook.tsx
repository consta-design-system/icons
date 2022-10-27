import { createIcon } from '../createIcon/createIcon';
import IconFacebookSizeM from './IconFacebook_size_m';
import IconFacebookSizeS from './IconFacebook_size_s';
import IconFacebookSizeXs from './IconFacebook_size_xs';

export const IconFacebook = createIcon({
  l: IconFacebookSizeM,
  m: IconFacebookSizeM,
  s: IconFacebookSizeS,
  xs: IconFacebookSizeXs,
  name: 'IconFacebook',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
