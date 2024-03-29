import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPanelBottomSizeM from './IconPanelBottom_size_m';
import IconPanelBottomSizeS from './IconPanelBottom_size_s';
import IconPanelBottomSizeXs from './IconPanelBottom_size_xs';

const props: CreateIconArguments = {
  l: IconPanelBottomSizeM,
  m: IconPanelBottomSizeM,
  s: IconPanelBottomSizeS,
  xs: IconPanelBottomSizeXs,
  name: 'IconPanelBottom',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
