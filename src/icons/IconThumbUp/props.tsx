import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconThumbUpSizeL from './IconThumbUp_size_l';
import IconThumbUpSizeM from './IconThumbUp_size_m';
import IconThumbUpSizeS from './IconThumbUp_size_s';
import IconThumbUpSizeXs from './IconThumbUp_size_xs';

const props: CreateIconArguments = {
  l: IconThumbUpSizeL,
  m: IconThumbUpSizeM,
  s: IconThumbUpSizeS,
  xs: IconThumbUpSizeXs,
  name: 'IconThumbUp',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
