import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBookmarkStrokedSizeL from './IconBookmarkStroked_size_l';
import IconBookmarkStrokedSizeM from './IconBookmarkStroked_size_m';
import IconBookmarkStrokedSizeS from './IconBookmarkStroked_size_s';
import IconBookmarkStrokedSizeXs from './IconBookmarkStroked_size_xs';

const props: CreateIconArguments = {
  l: IconBookmarkStrokedSizeL,
  m: IconBookmarkStrokedSizeM,
  s: IconBookmarkStrokedSizeS,
  xs: IconBookmarkStrokedSizeXs,
  name: 'IconBookmarkStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
