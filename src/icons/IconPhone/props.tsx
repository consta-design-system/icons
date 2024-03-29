import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPhoneSizeL from './IconPhone_size_l';
import IconPhoneSizeM from './IconPhone_size_m';
import IconPhoneSizeS from './IconPhone_size_s';
import IconPhoneSizeXs from './IconPhone_size_xs';

const props: CreateIconArguments = {
  l: IconPhoneSizeL,
  m: IconPhoneSizeM,
  s: IconPhoneSizeS,
  xs: IconPhoneSizeXs,
  name: 'IconPhone',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
