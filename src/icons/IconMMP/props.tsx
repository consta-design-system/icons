import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMMPSizeL from './IconMMP_size_l';
import IconMMPSizeM from './IconMMP_size_m';
import IconMMPSizeS from './IconMMP_size_s';
import IconMMPSizeXs from './IconMMP_size_xs';

const props: CreateIconArguments = {
  l: IconMMPSizeL,
  m: IconMMPSizeM,
  s: IconMMPSizeS,
  xs: IconMMPSizeXs,
  name: 'IconMMP',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
