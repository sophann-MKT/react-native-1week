import React from 'react';
// import LoginEmail from './src/components/LoginEmail';
// import LoginPhoneNumber from './src/components/LoginPhoneNumber';
import Register from './src/components/Register';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <React.Fragment>
        {/* <LoginEmail /> */}
        {/* <LoginPhoneNumber /> */}
        <Register />
      </React.Fragment>
    </NativeBaseProvider>
  );
};

export default App;
