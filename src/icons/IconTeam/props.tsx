import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTeamSizeM from './IconTeam_size_m';
import IconTeamSizeS from './IconTeam_size_s';
import IconTeamSizeXs from './IconTeam_size_xs';

const props: CreateIconArguments = {
  l: IconTeamSizeM,
  m: IconTeamSizeM,
  s: IconTeamSizeS,
  xs: IconTeamSizeXs,
  name: 'IconTeam',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
