import {withMask} from './core/mask';
import PureParallel from './core/PureParallel';

const SlidePicker = {
  PureParallel: PureParallel,
  Parallel: withMask(PureParallel),
};

export default SlidePicker;
