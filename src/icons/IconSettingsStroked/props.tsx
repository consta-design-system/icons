import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSettingsStrokedSizeL from './IconSettingsStroked_size_l';
import IconSettingsStrokedSizeM from './IconSettingsStroked_size_m';
import IconSettingsStrokedSizeS from './IconSettingsStroked_size_s';
import IconSettingsStrokedSizeXs from './IconSettingsStroked_size_xs';

const props: CreateIconArguments = {
  l: IconSettingsStrokedSizeL,
  m: IconSettingsStrokedSizeM,
  s: IconSettingsStrokedSizeS,
  xs: IconSettingsStrokedSizeXs,
  name: 'IconSettingsStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
