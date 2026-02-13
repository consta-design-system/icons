import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileAnimationSizeM from './IconFileAnimation_size_m';
import IconFileAnimationSizeS from './IconFileAnimation_size_s';

const props: CreateIconArguments = {
  l: IconFileAnimationSizeM,
  m: IconFileAnimationSizeM,
  s: IconFileAnimationSizeS,
  xs: IconFileAnimationSizeM,
  name: 'IconFileAnimation',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
