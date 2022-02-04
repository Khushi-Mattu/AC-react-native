import React, { useState } from 'react';
import {Text,Button,StyleSheet,View,Alert} from 'react-native';
const GetStartedButton=()=>{
    return(
    <View style={styles.button}>
        <Button
        title="Get Started !"
        onPress={() => Alert.alert('Have fun banking!')}
      />
    </View>
    );
}
const styles = StyleSheet.create({
    button:{
        //marginTop:20,
        marginBottom:50,
        color:'crimson',
        fontSize:25,
        fontStyle:'italic',
        fontWeight:'bold',
        //backgroundColor:'pink'
    }
})
export default GetStartedButton;