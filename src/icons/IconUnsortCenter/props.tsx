import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconUnsortCenterSizeM from './IconUnsortCenter_size_m';
import IconUnsortCenterSizeS from './IconUnsortCenter_size_s';
import IconUnsortCenterSizeXs from './IconUnsortCenter_size_xs';

const props: CreateIconArguments = {
  l: IconUnsortCenterSizeM,
  m: IconUnsortCenterSizeM,
  s: IconUnsortCenterSizeS,
  xs: IconUnsortCenterSizeXs,
  name: 'IconUnsortCenter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
