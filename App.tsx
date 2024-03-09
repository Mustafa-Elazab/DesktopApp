import React from 'react';
import MessageScreen from './src/screens/MessageScreen';
import {NetworkProvider} from './src/Component/NetworkContext';

export default React.memo(() => {
  return (
    <NetworkProvider>
      <MessageScreen />
    </NetworkProvider>
  );
});
