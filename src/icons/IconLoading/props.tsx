import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLoadingSizeM from './IconLoading_size_m';
import IconLoadingSizeS from './IconLoading_size_s';
import IconLoadingSizeXs from './IconLoading_size_xs';

const props: CreateIconArguments = {
  l: IconLoadingSizeM,
  m: IconLoadingSizeM,
  s: IconLoadingSizeS,
  xs: IconLoadingSizeXs,
  name: 'IconLoading',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
