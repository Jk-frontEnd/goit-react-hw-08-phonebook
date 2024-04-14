import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <InfinitySpin
    visible={true}
    width={200}
    color="#ffbe0b"
    ariaLabel="infinity-spin-loading"
  />
);

export default Loader;
