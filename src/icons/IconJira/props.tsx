import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconJiraSizeM from './IconJira_size_m';
import IconJiraSizeS from './IconJira_size_s';
import IconJiraSizeXs from './IconJira_size_xs';

const props: CreateIconArguments = {
  l: IconJiraSizeM,
  m: IconJiraSizeM,
  s: IconJiraSizeS,
  xs: IconJiraSizeXs,
  name: 'IconJira',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
