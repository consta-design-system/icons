import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconHealthSizeM from './IconHealth_size_m';
import IconHealthSizeS from './IconHealth_size_s';
import IconHealthSizeXs from './IconHealth_size_xs';

const props: CreateIconArguments = {
  l: IconHealthSizeM,
  m: IconHealthSizeM,
  s: IconHealthSizeS,
  xs: IconHealthSizeXs,
  name: 'IconHealth',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
