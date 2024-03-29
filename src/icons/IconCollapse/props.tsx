import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCollapseSizeM from './IconCollapse_size_m';
import IconCollapseSizeS from './IconCollapse_size_s';
import IconCollapseSizeXs from './IconCollapse_size_xs';

const props: CreateIconArguments = {
  l: IconCollapseSizeM,
  m: IconCollapseSizeM,
  s: IconCollapseSizeS,
  xs: IconCollapseSizeXs,
  name: 'IconCollapse',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
