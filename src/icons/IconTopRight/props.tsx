import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTopRightSizeM from './IconTopRight_size_m';
import IconTopRightSizeS from './IconTopRight_size_s';
import IconTopRightSizeXs from './IconTopRight_size_xs';

const props: CreateIconArguments = {
  l: IconTopRightSizeM,
  m: IconTopRightSizeM,
  s: IconTopRightSizeS,
  xs: IconTopRightSizeXs,
  name: 'IconTopRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
