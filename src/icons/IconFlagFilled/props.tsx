import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFlagFilledSizeM from './IconFlagFilled_size_m';
import IconFlagFilledSizeS from './IconFlagFilled_size_s';
import IconFlagFilledSizeXs from './IconFlagFilled_size_xs';

const props: CreateIconArguments = {
  l: IconFlagFilledSizeM,
  m: IconFlagFilledSizeM,
  s: IconFlagFilledSizeS,
  xs: IconFlagFilledSizeXs,
  name: 'IconFlagFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
