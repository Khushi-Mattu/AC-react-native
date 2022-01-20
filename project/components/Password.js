import React from 'react';
import {StyleSheet, View,Text, TextInput } from 'react-native';

const Password = () => {
    return(<View  style={styles.inputView}>
      <TextInput secureTextEntry={true} placeholder="Enter your password" style={styles.textInput}
          onChangeText={(password) => setPassword(password) } placeholderTextColor="#003f5c"
      />
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
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        marginBottom: 20,
        alignItems: "center",
      },
  });
export default Password;