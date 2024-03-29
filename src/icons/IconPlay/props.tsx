import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPlaySizeL from './IconPlay_size_l';
import IconPlaySizeM from './IconPlay_size_m';
import IconPlaySizeS from './IconPlay_size_s';
import IconPlaySizeXs from './IconPlay_size_xs';

const props: CreateIconArguments = {
  l: IconPlaySizeL,
  m: IconPlaySizeM,
  s: IconPlaySizeS,
  xs: IconPlaySizeXs,
  name: 'IconPlay',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
