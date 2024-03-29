import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMaxWidthSizeM from './IconMaxWidth_size_m';
import IconMaxWidthSizeS from './IconMaxWidth_size_s';
import IconMaxWidthSizeXs from './IconMaxWidth_size_xs';

const props: CreateIconArguments = {
  l: IconMaxWidthSizeM,
  m: IconMaxWidthSizeM,
  s: IconMaxWidthSizeS,
  xs: IconMaxWidthSizeXs,
  name: 'IconMaxWidth',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
