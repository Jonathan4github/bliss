import React from 'react';
import {Spin, SpinContainer} from './loader.style';

const Loader = () => (
  <SpinContainer >
    <Spin data-testid="loader" />
  </SpinContainer>
)

export default Loader;
