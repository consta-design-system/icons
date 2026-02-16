import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileMailSizeM from './IconFileMail_size_m';
import IconFileMailSizeS from './IconFileMail_size_s';

const props: CreateIconArguments = {
  l: IconFileMailSizeM,
  m: IconFileMailSizeM,
  s: IconFileMailSizeS,
  xs: IconFileMailSizeM,
  name: 'IconFileMail',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
