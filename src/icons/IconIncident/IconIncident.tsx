import { createIcon } from '../createIcon/createIcon';
import IconIncidentSizeM from './IconIncident_size_m';
import IconIncidentSizeS from './IconIncident_size_s';
import IconIncidentSizeXs from './IconIncident_size_xs';

export const IconIncident = createIcon({
  l: IconIncidentSizeM,
  m: IconIncidentSizeM,
  s: IconIncidentSizeS,
  xs: IconIncidentSizeXs,
  name: 'IconIncident',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
