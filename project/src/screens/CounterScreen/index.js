import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const CounterScreen = () => {
    return (
      <View style={styles.steps}>
       <FontAwesomeIcon icon="fa-thin fa-person-walking" size={40}/>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
      steps:{
        backgroundColor: 'blue',
        alignItems: 'center',
      justifyContent: 'center'
      }
  })
  export default CounterScreen;