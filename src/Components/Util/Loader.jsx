import React from 'react'
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


const LoaderComponents = () => {
  return (
    <Loader
      type="TailSpin"
      color="black"
      secondaryColor="red"
      height={50}
      width={50}
      timeout={10000}
    />
  );
}

export default LoaderComponents;
