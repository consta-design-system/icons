import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDocAddSizeL from './IconDocAdd_size_l';
import IconDocAddSizeM from './IconDocAdd_size_m';
import IconDocAddSizeS from './IconDocAdd_size_s';
import IconDocAddSizeXs from './IconDocAdd_size_xs';

const props: CreateIconArguments = {
  l: IconDocAddSizeL,
  m: IconDocAddSizeM,
  s: IconDocAddSizeS,
  xs: IconDocAddSizeXs,
  name: 'IconDocAdd',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
