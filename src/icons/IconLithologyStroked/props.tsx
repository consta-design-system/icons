import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLithologyStrokedSizeM from './IconLithologyStroked_size_m';
import IconLithologyStrokedSizeS from './IconLithologyStroked_size_s';
import IconLithologyStrokedSizeXs from './IconLithologyStroked_size_xs';

const props: CreateIconArguments = {
  l: IconLithologyStrokedSizeM,
  m: IconLithologyStrokedSizeM,
  s: IconLithologyStrokedSizeS,
  xs: IconLithologyStrokedSizeXs,
  name: 'IconLithologyStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
