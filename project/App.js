import React from 'react';
//import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <>
      <LoginScreen/>
    </>
  );
}

export default App;