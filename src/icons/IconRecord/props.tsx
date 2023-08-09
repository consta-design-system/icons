import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRecordSizeM from './IconRecord_size_m';
import IconRecordSizeS from './IconRecord_size_s';
import IconRecordSizeXs from './IconRecord_size_xs';

const props: CreateIconArguments = {
  l: IconRecordSizeM,
  m: IconRecordSizeM,
  s: IconRecordSizeS,
  xs: IconRecordSizeXs,
  name: 'IconRecord',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
