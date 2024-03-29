import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconIntroductionSizeM from './IconIntroduction_size_m';
import IconIntroductionSizeS from './IconIntroduction_size_s';
import IconIntroductionSizeXs from './IconIntroduction_size_xs';

const props: CreateIconArguments = {
  l: IconIntroductionSizeM,
  m: IconIntroductionSizeM,
  s: IconIntroductionSizeS,
  xs: IconIntroductionSizeXs,
  name: 'IconIntroduction',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
