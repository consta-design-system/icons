import { createIcon } from '../Icon';
import IconCalendarSizeL from './IconCalendar_size_l';
import IconCalendarSizeM from './IconCalendar_size_m';
import IconCalendarSizeS from './IconCalendar_size_s';
import IconCalendarSizeXs from './IconCalendar_size_xs';

export const IconCalendar = createIcon({
  l: IconCalendarSizeL,
  m: IconCalendarSizeM,
  s: IconCalendarSizeS,
  xs: IconCalendarSizeXs,
  name: 'IconCalendar',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
