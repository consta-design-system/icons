import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFilterSizeL from './IconFilter_size_l';
import IconFilterSizeM from './IconFilter_size_m';
import IconFilterSizeS from './IconFilter_size_s';
import IconFilterSizeXs from './IconFilter_size_xs';

const props: CreateIconArguments = {
  l: IconFilterSizeL,
  m: IconFilterSizeM,
  s: IconFilterSizeS,
  xs: IconFilterSizeXs,
  name: 'IconFilter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
