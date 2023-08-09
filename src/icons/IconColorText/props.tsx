import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconColorTextSizeM from './IconColorText_size_m';
import IconColorTextSizeS from './IconColorText_size_s';
import IconColorTextSizeXs from './IconColorText_size_xs';

const props: CreateIconArguments = {
  l: IconColorTextSizeM,
  m: IconColorTextSizeM,
  s: IconColorTextSizeS,
  xs: IconColorTextSizeXs,
  name: 'IconColorText',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
