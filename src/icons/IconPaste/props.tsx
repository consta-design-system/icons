import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPasteSizeL from './IconPaste_size_l';
import IconPasteSizeM from './IconPaste_size_m';
import IconPasteSizeS from './IconPaste_size_s';
import IconPasteSizeXs from './IconPaste_size_xs';

const props: CreateIconArguments = {
  l: IconPasteSizeL,
  m: IconPasteSizeM,
  s: IconPasteSizeS,
  xs: IconPasteSizeXs,
  name: 'IconPaste',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
