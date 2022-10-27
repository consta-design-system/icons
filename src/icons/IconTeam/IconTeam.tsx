import { createIcon } from '../createIcon/createIcon';
import IconTeamSizeM from './IconTeam_size_m';
import IconTeamSizeS from './IconTeam_size_s';
import IconTeamSizeXs from './IconTeam_size_xs';

export const IconTeam = createIcon({
  l: IconTeamSizeM,
  m: IconTeamSizeM,
  s: IconTeamSizeS,
  xs: IconTeamSizeXs,
  name: 'IconTeam',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
