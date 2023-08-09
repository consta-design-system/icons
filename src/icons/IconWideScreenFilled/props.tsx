import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWideScreenFilledSizeM from './IconWideScreenFilled_size_m';
import IconWideScreenFilledSizeS from './IconWideScreenFilled_size_s';
import IconWideScreenFilledSizeXs from './IconWideScreenFilled_size_xs';

const props: CreateIconArguments = {
  l: IconWideScreenFilledSizeM,
  m: IconWideScreenFilledSizeM,
  s: IconWideScreenFilledSizeS,
  xs: IconWideScreenFilledSizeXs,
  name: 'IconWideScreenFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
