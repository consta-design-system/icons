import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDocBlankSizeL from './IconDocBlank_size_l';
import IconDocBlankSizeM from './IconDocBlank_size_m';
import IconDocBlankSizeS from './IconDocBlank_size_s';
import IconDocBlankSizeXs from './IconDocBlank_size_xs';

const props: CreateIconArguments = {
  l: IconDocBlankSizeL,
  m: IconDocBlankSizeM,
  s: IconDocBlankSizeS,
  xs: IconDocBlankSizeXs,
  name: 'IconDocBlank',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
