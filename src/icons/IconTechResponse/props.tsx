import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTechResponseSizeM from './IconTechResponse_size_m';
import IconTechResponseSizeS from './IconTechResponse_size_s';
import IconTechResponseSizeXs from './IconTechResponse_size_xs';

const props: CreateIconArguments = {
  l: IconTechResponseSizeM,
  m: IconTechResponseSizeM,
  s: IconTechResponseSizeS,
  xs: IconTechResponseSizeXs,
  name: 'IconTechResponse',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
