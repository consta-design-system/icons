import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSkypeSizeM from './IconSkype_size_m';
import IconSkypeSizeS from './IconSkype_size_s';
import IconSkypeSizeXs from './IconSkype_size_xs';

const props: CreateIconArguments = {
  l: IconSkypeSizeM,
  m: IconSkypeSizeM,
  s: IconSkypeSizeS,
  xs: IconSkypeSizeXs,
  name: 'IconSkype',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
