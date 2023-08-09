import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAddSizeM from './IconAdd_size_m';
import IconAddSizeS from './IconAdd_size_s';
import IconAddSizeXs from './IconAdd_size_xs';

const props: CreateIconArguments = {
  l: IconAddSizeM,
  m: IconAddSizeM,
  s: IconAddSizeS,
  xs: IconAddSizeXs,
  name: 'IconAdd',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
