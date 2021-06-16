import React from 'react';
import { useSelector } from 'react-redux';

import ColorfulBeads from '../components/ColorfulBeads';
import { CounterState } from '../reducer';

const EnhancedColorfulBeads: React.VFC<{ count?: number }> = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  return <ColorfulBeads count={count} />;
};

export default EnhancedColorfulBeads;
