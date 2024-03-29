import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPrinterStrokedSizeM from './IconPrinterStroked_size_m';
import IconPrinterStrokedSizeS from './IconPrinterStroked_size_s';
import IconPrinterStrokedSizeXs from './IconPrinterStroked_size_xs';

const props: CreateIconArguments = {
  l: IconPrinterStrokedSizeM,
  m: IconPrinterStrokedSizeM,
  s: IconPrinterStrokedSizeS,
  xs: IconPrinterStrokedSizeXs,
  name: 'IconPrinterStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
