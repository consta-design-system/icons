import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconConfluenceSizeM from './IconConfluence_size_m';
import IconConfluenceSizeS from './IconConfluence_size_s';

const props: CreateIconArguments = {
  l: IconConfluenceSizeM,
  m: IconConfluenceSizeM,
  s: IconConfluenceSizeS,
  xs: IconConfluenceSizeM,
  name: 'IconConfluence',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
