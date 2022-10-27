import { createIcon } from '../createIcon/createIcon';
import IconSettingsSizeM from './IconSettings_size_m';
import IconSettingsSizeS from './IconSettings_size_s';
import IconSettingsSizeXs from './IconSettings_size_xs';

export const IconSettings = createIcon({
  l: IconSettingsSizeM,
  m: IconSettingsSizeM,
  s: IconSettingsSizeS,
  xs: IconSettingsSizeXs,
  name: 'IconSettings',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
