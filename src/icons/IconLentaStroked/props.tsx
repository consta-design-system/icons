import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLentaStrokedSizeM from './IconLentaStroked_size_m';
import IconLentaStrokedSizeS from './IconLentaStroked_size_s';
import IconLentaStrokedSizeXs from './IconLentaStroked_size_xs';

const props: CreateIconArguments = {
  l: IconLentaStrokedSizeM,
  m: IconLentaStrokedSizeM,
  s: IconLentaStrokedSizeS,
  xs: IconLentaStrokedSizeXs,
  name: 'IconLentaStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
