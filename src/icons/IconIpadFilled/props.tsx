import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconIpadFilledSizeM from './IconIpadFilled_size_m';
import IconIpadFilledSizeS from './IconIpadFilled_size_s';
import IconIpadFilledSizeXs from './IconIpadFilled_size_xs';

const props: CreateIconArguments = {
  l: IconIpadFilledSizeM,
  m: IconIpadFilledSizeM,
  s: IconIpadFilledSizeS,
  xs: IconIpadFilledSizeXs,
  name: 'IconIpadFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
