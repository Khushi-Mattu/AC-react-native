import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import Email from './components/Email';
import Password from './components/Password';
const App = () => {
  render()
  return (
    <View style={styles.container}>
    <Email/>
    <Password/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;