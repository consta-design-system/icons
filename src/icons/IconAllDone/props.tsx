import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAllDoneSizeM from './IconAllDone_size_m';
import IconAllDoneSizeS from './IconAllDone_size_s';
import IconAllDoneSizeXs from './IconAllDone_size_xs';

const props: CreateIconArguments = {
  l: IconAllDoneSizeM,
  m: IconAllDoneSizeM,
  s: IconAllDoneSizeS,
  xs: IconAllDoneSizeXs,
  name: 'IconAllDone',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
