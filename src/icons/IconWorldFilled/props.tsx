import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWorldFilledSizeM from './IconWorldFilled_size_m';
import IconWorldFilledSizeS from './IconWorldFilled_size_s';
import IconWorldFilledSizeXs from './IconWorldFilled_size_xs';

const props: CreateIconArguments = {
  l: IconWorldFilledSizeM,
  m: IconWorldFilledSizeM,
  s: IconWorldFilledSizeS,
  xs: IconWorldFilledSizeXs,
  name: 'IconWorldFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
