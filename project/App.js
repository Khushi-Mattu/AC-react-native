import React from 'react';
//import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
//import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//import LoginScreen from './src/screens/LoginScreen';
//import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen'
import CountContextProvider from './src/components/Context/CountContextProvider';

const App = () => {
  return (
    
     <CountContextProvider>
      <CounterScreen/>
    </CountContextProvider>
    
  );
}

export default App;
