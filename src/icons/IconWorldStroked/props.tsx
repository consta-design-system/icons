import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWorldStrokedSizeL from './IconWorldStroked_size_l';
import IconWorldStrokedSizeM from './IconWorldStroked_size_m';
import IconWorldStrokedSizeS from './IconWorldStroked_size_s';
import IconWorldStrokedSizeXs from './IconWorldStroked_size_xs';

const props: CreateIconArguments = {
  l: IconWorldStrokedSizeL,
  m: IconWorldStrokedSizeM,
  s: IconWorldStrokedSizeS,
  xs: IconWorldStrokedSizeXs,
  name: 'IconWorldStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
