import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconVolumeUpSizeM from './IconVolumeUp_size_m';
import IconVolumeUpSizeS from './IconVolumeUp_size_s';
import IconVolumeUpSizeXs from './IconVolumeUp_size_xs';

const props: CreateIconArguments = {
  l: IconVolumeUpSizeM,
  m: IconVolumeUpSizeM,
  s: IconVolumeUpSizeS,
  xs: IconVolumeUpSizeXs,
  name: 'IconVolumeUp',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
