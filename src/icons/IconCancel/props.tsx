import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCancelSizeM from './IconCancel_size_m';
import IconCancelSizeS from './IconCancel_size_s';
import IconCancelSizeXs from './IconCancel_size_xs';

const props: CreateIconArguments = {
  l: IconCancelSizeM,
  m: IconCancelSizeM,
  s: IconCancelSizeS,
  xs: IconCancelSizeXs,
  name: 'IconCancel',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
