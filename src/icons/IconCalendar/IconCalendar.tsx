import { createIcon } from '../createIcon/createIcon';
import IconCalendarSizeM from './IconCalendar_size_m';
import IconCalendarSizeS from './IconCalendar_size_s';
import IconCalendarSizeXs from './IconCalendar_size_xs';

export const IconCalendar = createIcon({
  l: IconCalendarSizeM,
  m: IconCalendarSizeM,
  s: IconCalendarSizeS,
  xs: IconCalendarSizeXs,
  name: 'IconCalendar',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
