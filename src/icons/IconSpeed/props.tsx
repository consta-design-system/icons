import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSpeedSizeL from './IconSpeed_size_l';
import IconSpeedSizeM from './IconSpeed_size_m';
import IconSpeedSizeS from './IconSpeed_size_s';
import IconSpeedSizeXs from './IconSpeed_size_xs';

const props: CreateIconArguments = {
  l: IconSpeedSizeL,
  m: IconSpeedSizeM,
  s: IconSpeedSizeS,
  xs: IconSpeedSizeXs,
  name: 'IconSpeed',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
