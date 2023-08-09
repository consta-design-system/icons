import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTopSizeM from './IconTop_size_m';
import IconTopSizeS from './IconTop_size_s';
import IconTopSizeXs from './IconTop_size_xs';

const props: CreateIconArguments = {
  l: IconTopSizeM,
  m: IconTopSizeM,
  s: IconTopSizeS,
  xs: IconTopSizeXs,
  name: 'IconTop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
