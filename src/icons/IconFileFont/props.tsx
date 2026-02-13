import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileFontSizeM from './IconFileFont_size_m';
import IconFileFontSizeS from './IconFileFont_size_s';

const props: CreateIconArguments = {
  l: IconFileFontSizeM,
  m: IconFileFontSizeM,
  s: IconFileFontSizeS,
  xs: IconFileFontSizeM,
  name: 'IconFileFont',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
