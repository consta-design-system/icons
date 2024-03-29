import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBackwardSizeM from './IconBackward_size_m';
import IconBackwardSizeS from './IconBackward_size_s';
import IconBackwardSizeXs from './IconBackward_size_xs';

const props: CreateIconArguments = {
  l: IconBackwardSizeM,
  m: IconBackwardSizeM,
  s: IconBackwardSizeS,
  xs: IconBackwardSizeXs,
  name: 'IconBackward',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
