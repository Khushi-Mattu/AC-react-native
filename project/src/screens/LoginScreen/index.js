import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import KhushiInput from '../../components/CustomTextComponent/KhushiInput';
import LoginButton from '../../components/LoginButton';

const LoginScreen = () => {
    render()
    return (
      <View style={styles.container}>
      <Image source={require('../../../assets/back.png')} style={styles.backgroundImage}></Image>
      <Text>Hello!</Text>
      <KhushiInput placeholderText = "Enter your email address"/>
      <KhushiInput placeholderText = "Enter your password" visibility = {true}/>
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
    text: {
      fontSize:60,
      color: 'purple'
    },
    textInput: {
      width: "90%",
      height: 50,
      borderColor: 'red',
      borderWidth: 2
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      marginBottom: 20,
      alignItems: "center",
    },
  });

export default LoginScreen;