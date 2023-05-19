import { createIcon } from '../Icon';
import IconPrinterStrokedSizeM from './IconPrinterStroked_size_m';
import IconPrinterStrokedSizeS from './IconPrinterStroked_size_s';
import IconPrinterStrokedSizeXs from './IconPrinterStroked_size_xs';

export const IconPrinterStroked = createIcon({
  l: IconPrinterStrokedSizeM,
  m: IconPrinterStrokedSizeM,
  s: IconPrinterStrokedSizeS,
  xs: IconPrinterStrokedSizeXs,
  name: 'IconPrinterStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
