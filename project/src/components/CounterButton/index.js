import React, { useState } from 'react';
import {Text,Button,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
const CounterButton=() =>{
  const [count, setCount] = useState(0);
  return (
      <>

      <Button title=" Click me each time you drink a glass of water!" color='deeppink' fontSize='20' onPress={() => setCount(count + 100)} />
      <Text style={styles.text}>The water count is now {count} ml!</Text>
      {/* </Button> */}
      </>
  );
}

const styles = StyleSheet.create({
    text:{
        marginTop:20,
        marginBottom:30,
        color:'crimson',
        fontSize:25,
        backgroundColor:'dodgerblue',
        
    }
})
export default CounterButton;