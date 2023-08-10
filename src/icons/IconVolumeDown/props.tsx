import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconVolumeDownSizeM from './IconVolumeDown_size_m';
import IconVolumeDownSizeS from './IconVolumeDown_size_s';
import IconVolumeDownSizeXs from './IconVolumeDown_size_xs';

const props: CreateIconArguments = {
  l: IconVolumeDownSizeM,
  m: IconVolumeDownSizeM,
  s: IconVolumeDownSizeS,
  xs: IconVolumeDownSizeXs,
  name: 'IconVolumeDown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
