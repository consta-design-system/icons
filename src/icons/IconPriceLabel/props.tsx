import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPriceLabelSizeM from './IconPriceLabel_size_m';
import IconPriceLabelSizeS from './IconPriceLabel_size_s';
import IconPriceLabelSizeXs from './IconPriceLabel_size_xs';

const props: CreateIconArguments = {
  l: IconPriceLabelSizeM,
  m: IconPriceLabelSizeM,
  s: IconPriceLabelSizeS,
  xs: IconPriceLabelSizeXs,
  name: 'IconPriceLabel',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
