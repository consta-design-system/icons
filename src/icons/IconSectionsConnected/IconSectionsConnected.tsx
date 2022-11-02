import { createIcon } from '../Icon';
import IconSectionsConnectedSizeS from './IconSectionsConnected_size_s';

export const IconSectionsConnected = createIcon({
  l: IconSectionsConnectedSizeS,
  m: IconSectionsConnectedSizeS,
  s: IconSectionsConnectedSizeS,
  xs: IconSectionsConnectedSizeS,
  name: 'IconSectionsConnected',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
