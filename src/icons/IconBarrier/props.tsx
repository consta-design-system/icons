import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBarrierSizeM from './IconBarrier_size_m';
import IconBarrierSizeS from './IconBarrier_size_s';
import IconBarrierSizeXs from './IconBarrier_size_xs';

const props: CreateIconArguments = {
  l: IconBarrierSizeM,
  m: IconBarrierSizeM,
  s: IconBarrierSizeS,
  xs: IconBarrierSizeXs,
  name: 'IconBarrier',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
