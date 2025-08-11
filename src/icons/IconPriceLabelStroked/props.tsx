import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPriceLabelStrokedSizeL from './IconPriceLabelStroked_size_l';
import IconPriceLabelStrokedSizeM from './IconPriceLabelStroked_size_m';
import IconPriceLabelStrokedSizeS from './IconPriceLabelStroked_size_s';
import IconPriceLabelStrokedSizeXs from './IconPriceLabelStroked_size_xs';

const props: CreateIconArguments = {
  l: IconPriceLabelStrokedSizeL,
  m: IconPriceLabelStrokedSizeM,
  s: IconPriceLabelStrokedSizeS,
  xs: IconPriceLabelStrokedSizeXs,
  name: 'IconPriceLabelStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
