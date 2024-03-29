import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLogicalElementSizeM from './IconLogicalElement_size_m';
import IconLogicalElementSizeS from './IconLogicalElement_size_s';
import IconLogicalElementSizeXs from './IconLogicalElement_size_xs';

const props: CreateIconArguments = {
  l: IconLogicalElementSizeM,
  m: IconLogicalElementSizeM,
  s: IconLogicalElementSizeS,
  xs: IconLogicalElementSizeXs,
  name: 'IconLogicalElement',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
