import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCameraSizeL from './IconCamera_size_l';
import IconCameraSizeM from './IconCamera_size_m';
import IconCameraSizeS from './IconCamera_size_s';
import IconCameraSizeXs from './IconCamera_size_xs';

const props: CreateIconArguments = {
  l: IconCameraSizeL,
  m: IconCameraSizeM,
  s: IconCameraSizeS,
  xs: IconCameraSizeXs,
  name: 'IconCamera',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
