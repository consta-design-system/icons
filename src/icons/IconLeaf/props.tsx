import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLeafSizeM from './IconLeaf_size_m';
import IconLeafSizeS from './IconLeaf_size_s';
import IconLeafSizeXs from './IconLeaf_size_xs';

const props: CreateIconArguments = {
  l: IconLeafSizeM,
  m: IconLeafSizeM,
  s: IconLeafSizeS,
  xs: IconLeafSizeXs,
  name: 'IconLeaf',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
