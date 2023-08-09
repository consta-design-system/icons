import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconUnsortSizeM from './IconUnsort_size_m';
import IconUnsortSizeS from './IconUnsort_size_s';
import IconUnsortSizeXs from './IconUnsort_size_xs';

const props: CreateIconArguments = {
  l: IconUnsortSizeM,
  m: IconUnsortSizeM,
  s: IconUnsortSizeS,
  xs: IconUnsortSizeXs,
  name: 'IconUnsort',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
