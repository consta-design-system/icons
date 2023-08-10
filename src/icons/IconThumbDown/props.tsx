import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconThumbDownSizeM from './IconThumbDown_size_m';
import IconThumbDownSizeS from './IconThumbDown_size_s';
import IconThumbDownSizeXs from './IconThumbDown_size_xs';

const props: CreateIconArguments = {
  l: IconThumbDownSizeM,
  m: IconThumbDownSizeM,
  s: IconThumbDownSizeS,
  xs: IconThumbDownSizeXs,
  name: 'IconThumbDown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
