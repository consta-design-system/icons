import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconHashtagSizeM from './IconHashtag_size_m';
import IconHashtagSizeS from './IconHashtag_size_s';
import IconHashtagSizeXs from './IconHashtag_size_xs';

const props: CreateIconArguments = {
  l: IconHashtagSizeM,
  m: IconHashtagSizeM,
  s: IconHashtagSizeS,
  xs: IconHashtagSizeXs,
  name: 'IconHashtag',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
