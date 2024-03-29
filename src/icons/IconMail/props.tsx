import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMailSizeL from './IconMail_size_l';
import IconMailSizeM from './IconMail_size_m';
import IconMailSizeS from './IconMail_size_s';
import IconMailSizeXs from './IconMail_size_xs';

const props: CreateIconArguments = {
  l: IconMailSizeL,
  m: IconMailSizeM,
  s: IconMailSizeS,
  xs: IconMailSizeXs,
  name: 'IconMail',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
