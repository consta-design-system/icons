import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconHamburgerSizeM from './IconHamburger_size_m';
import IconHamburgerSizeS from './IconHamburger_size_s';
import IconHamburgerSizeXs from './IconHamburger_size_xs';

const props: CreateIconArguments = {
  l: IconHamburgerSizeM,
  m: IconHamburgerSizeM,
  s: IconHamburgerSizeS,
  xs: IconHamburgerSizeXs,
  name: 'IconHamburger',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
