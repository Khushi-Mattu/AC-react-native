import React,{useState} from 'react';
import {StyleSheet, TextInput,View} from 'react-native';

const KhushiInput = (props) =>{
    const [text, onChangeText] = React.useState(null);
    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholderText}
          placeholderTextColor="#00008B"
          secureTextEntry={props.visibility}
          onChangeText = {val => onChangeText(val)}
          val={text}
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
  export default KhushiInput;
  