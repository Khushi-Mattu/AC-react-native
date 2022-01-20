import React from 'react';
import {StyleSheet, View,Text, TextInput } from 'react-native';

const Email = (props) => {
  return (<View  style={styles.inputView}>
  <Text style={styles.text}>Hello {props.email}</Text>
    <TextInput style={styles.textInput} placeholder="Enter your email address" autocomplete="on"
      placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
    />
 </View>);
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
  text: {
    fontSize:40,
    color: 'purple'
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    marginBottom: 20,
    alignItems: "center",
  },
});
export default Email;
