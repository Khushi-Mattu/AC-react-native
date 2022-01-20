import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import Email from './components/Email';
import Password from './components/Password';
import LoginButton from './components/LoginButton';
const App = () => {
  render()
  return (
    <View style={styles.container}>
    <Image source={require('./assets/back.png')} style={styles.backgroundImage}></Image>
    <Email/>
    <Password/>
    <LoginButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    rowgap: 10,
  },
});
export default App;