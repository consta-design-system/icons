import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconYoutubeSizeM from './IconYoutube_size_m';
import IconYoutubeSizeS from './IconYoutube_size_s';
import IconYoutubeSizeXs from './IconYoutube_size_xs';

const props: CreateIconArguments = {
  l: IconYoutubeSizeM,
  m: IconYoutubeSizeM,
  s: IconYoutubeSizeS,
  xs: IconYoutubeSizeXs,
  name: 'IconYoutube',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
