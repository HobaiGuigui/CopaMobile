import { View } from 'react-native';
import { NativeBaseProvider, StatusBar } from "native-base";
import {AuthContextProvider} from './src/contexts/AuthContext';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium} from '@expo-google-fonts/roboto';

import { New } from './src/screens/New';
import { Signin } from './src/screens/Signin';
import { Loading } from './src/components/Loading';
import { Find } from './src/screens/Find';

import { THEME } from './src/assets/styles/theme';
import { Pools } from './src/screens/Pools';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts ({ Roboto_400Regular, Roboto_700Bold, Roboto_500Medium });
    

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes /> 
      </AuthContextProvider>
      </NativeBaseProvider>
      
  );
}

