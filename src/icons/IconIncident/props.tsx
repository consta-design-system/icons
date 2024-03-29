import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconIncidentSizeM from './IconIncident_size_m';
import IconIncidentSizeS from './IconIncident_size_s';
import IconIncidentSizeXs from './IconIncident_size_xs';

const props: CreateIconArguments = {
  l: IconIncidentSizeM,
  m: IconIncidentSizeM,
  s: IconIncidentSizeS,
  xs: IconIncidentSizeXs,
  name: 'IconIncident',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
