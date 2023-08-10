import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconOpenInNewSizeM from './IconOpenInNew_size_m';
import IconOpenInNewSizeS from './IconOpenInNew_size_s';
import IconOpenInNewSizeXs from './IconOpenInNew_size_xs';

const props: CreateIconArguments = {
  l: IconOpenInNewSizeM,
  m: IconOpenInNewSizeM,
  s: IconOpenInNewSizeS,
  xs: IconOpenInNewSizeXs,
  name: 'IconOpenInNew',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
