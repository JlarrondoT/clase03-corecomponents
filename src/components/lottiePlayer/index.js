import React from 'react';
import LottieView from 'lottie-react-native';

const SuccessfullyAnimation = () => {
  return (
    <LottieView
      source={require('./successful.json')}
      autoPlay={true}
      loop={false}
      style={{
        width: 80,
        height: 80,
        marginTop: 5,
      }}
    />
  );
};

export default SuccessfullyAnimation;
