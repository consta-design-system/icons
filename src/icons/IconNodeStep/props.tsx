import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconNodeStepSizeM from './IconNodeStep_size_m';
import IconNodeStepSizeS from './IconNodeStep_size_s';
import IconNodeStepSizeXs from './IconNodeStep_size_xs';

const props: CreateIconArguments = {
  l: IconNodeStepSizeM,
  m: IconNodeStepSizeM,
  s: IconNodeStepSizeS,
  xs: IconNodeStepSizeXs,
  name: 'IconNodeStep',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
