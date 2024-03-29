import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSaveSizeM from './IconSave_size_m';
import IconSaveSizeS from './IconSave_size_s';
import IconSaveSizeXs from './IconSave_size_xs';

const props: CreateIconArguments = {
  l: IconSaveSizeM,
  m: IconSaveSizeM,
  s: IconSaveSizeS,
  xs: IconSaveSizeXs,
  name: 'IconSave',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
