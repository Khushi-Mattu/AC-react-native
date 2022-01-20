import React from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

const Password = () => {
    return(<View>
      <TextInput secureTextEntry={true} placeholder="Enter your password" style={styles.textInput}/>
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
    textInput: {
      width: "90%",
      height: 50,
      borderColor: 'red',
      borderWidth: 2
    }
  });
export default Password;