import React from 'react';
import {StyleSheet, View,Text, TextInput } from 'react-native';

const Email = (props) => {
  return (<View>
    <TextInput style={styles.textInput} placeholder="Enter your email address" autocomplete="on"/>
    <Text style={styles.text}>Hello {props.email}</Text>
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
    height:70,
    fontcolor: 'purple'
  }
});
export default Email;
