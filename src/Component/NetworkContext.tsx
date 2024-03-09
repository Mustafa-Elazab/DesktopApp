import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import NetInfo, {
  NetInfoState,
  NetInfoSubscription,
} from '@react-native-community/netinfo';

interface NetworkContextType {
  isConnected: boolean;
}

const NetworkContext = createContext<NetworkContextType>({isConnected: false});

export const useNetwork = () => useContext(NetworkContext);

interface NetworkProviderProps {
  children: ReactNode;
}

export const NetworkProvider: React.FC<NetworkProviderProps> = ({children}) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const subscription: NetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        setIsConnected(state.isConnected && state.isInternetReachable);
      },
    );

    return () => subscription();
  }, []);

  return (
    <NetworkContext.Provider value={{isConnected}}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkContext;
