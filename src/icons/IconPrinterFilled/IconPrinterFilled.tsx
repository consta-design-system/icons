import { createIcon } from '../Icon';
import IconPrinterFilledSizeM from './IconPrinterFilled_size_m';
import IconPrinterFilledSizeS from './IconPrinterFilled_size_s';
import IconPrinterFilledSizeXs from './IconPrinterFilled_size_xs';

export const IconPrinterFilled = createIcon({
  l: IconPrinterFilledSizeM,
  m: IconPrinterFilledSizeM,
  s: IconPrinterFilledSizeS,
  xs: IconPrinterFilledSizeXs,
  name: 'IconPrinterFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
