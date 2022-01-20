import React from 'react';
import {StyleSheet, View,Text, TextInput ,TouchableOpacity} from 'react-native';

const LoginButton = () => {
    return(
<TouchableOpacity style={styles.login}>
        <Text style={styles.logintext}>LOGIN</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      width: "90%",
      height: 50,
      borderColor: 'red',
      borderWidth: 2
    },
    logintext: {
      fontSize:20,
      color: 'blue'
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      login:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    backgroundColor:"#FF1493",
  }
  });

  export default LoginButton;