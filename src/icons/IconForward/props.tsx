import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconForwardSizeM from './IconForward_size_m';
import IconForwardSizeS from './IconForward_size_s';
import IconForwardSizeXs from './IconForward_size_xs';

const props: CreateIconArguments = {
  l: IconForwardSizeM,
  m: IconForwardSizeM,
  s: IconForwardSizeS,
  xs: IconForwardSizeXs,
  name: 'IconForward',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
