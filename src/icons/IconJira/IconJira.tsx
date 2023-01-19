import { createIcon } from '../Icon';
import IconJiraSizeM from './IconJira_size_m';
import IconJiraSizeS from './IconJira_size_s';
import IconJiraSizeXs from './IconJira_size_xs';

export const IconJira = createIcon({
  l: IconJiraSizeM,
  m: IconJiraSizeM,
  s: IconJiraSizeS,
  xs: IconJiraSizeXs,
  name: 'IconJira',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
