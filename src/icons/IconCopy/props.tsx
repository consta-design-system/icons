import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCopySizeM from './IconCopy_size_m';
import IconCopySizeS from './IconCopy_size_s';
import IconCopySizeXs from './IconCopy_size_xs';

const props: CreateIconArguments = {
  l: IconCopySizeM,
  m: IconCopySizeM,
  s: IconCopySizeS,
  xs: IconCopySizeXs,
  name: 'IconCopy',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
