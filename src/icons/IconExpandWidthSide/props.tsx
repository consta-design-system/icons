import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconExpandWidthSideSizeM from './IconExpandWidthSide_size_m';
import IconExpandWidthSideSizeS from './IconExpandWidthSide_size_s';
import IconExpandWidthSideSizeXs from './IconExpandWidthSide_size_xs';

const props: CreateIconArguments = {
  l: IconExpandWidthSideSizeM,
  m: IconExpandWidthSideSizeM,
  s: IconExpandWidthSideSizeS,
  xs: IconExpandWidthSideSizeXs,
  name: 'IconExpandWidthSide',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
