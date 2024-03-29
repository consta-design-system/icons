import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFacebookSizeM from './IconFacebook_size_m';
import IconFacebookSizeS from './IconFacebook_size_s';
import IconFacebookSizeXs from './IconFacebook_size_xs';

const props: CreateIconArguments = {
  l: IconFacebookSizeM,
  m: IconFacebookSizeM,
  s: IconFacebookSizeS,
  xs: IconFacebookSizeXs,
  name: 'IconFacebook',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
