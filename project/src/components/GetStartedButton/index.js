import React, { useState } from 'react';
import {Text,Button,StyleSheet,View,ActivityIndicator} from 'react-native';
const GetStartedButton=()=>{
    const [indicator, setIndicator] = useState(false);
    return(
        <>
            <ActivityIndicator size="large" color="blue" animating={indicator} />
       
    <View style={styles.button}>
        <Button
        title="Get Started !"
        onPress={() => {
                setIndicator(!indicator);
              }}
        
      />
    </View>
    </>
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