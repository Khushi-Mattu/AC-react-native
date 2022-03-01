import React from 'react';
import {ImageBackground, StyleSheet, Text, View ,Image,Button} from 'react-native';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');

import {useCountContext} from '../../components/Context/CountContextProvider';

const CounterScreen = () => {
  const countContext = useCountContext();
    const IncrementCount = () => {
        countContext.setCount(countContext.count+100)
      };
    return (
      <View style={styles.steps}>
      <ImageBackground source={require('../../../assets/water.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}> Drinking water is very important!</Text>
      <Image style={styles.img} source={require('../../../assets/w.png')}></Image>
      <Text style={styles.text}> So, here's a counter to keep your  water intake in check!</Text>
      <Button title=" Click me each time you drink a glass of water!" color='deeppink' fontSize='20'
       onPress={IncrementCount} />
      <Text style={styles.newtext}>Your water count is now {countContext.count} ml!</Text>
    </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
      steps:{
        flex:1,
        justifyContent: 'space-around',
        //alignItems: 'center'
      },
      backgroundImage:{
        flex:1
      },
      img:{
        display: 'flex',
        width:300,
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:20,
        marginLeft:50
      },
      
      text:{
        fontSize:25,
        color:'darkmagenta',
        //backgroundColor:'deepskyblue',
        marginTop:30,
        marginBottom:30,
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle:'italic',
        fontWeight:'bold'
      },
      button:{
        backgroundColor:'pink',
        
      },
      image:{
        flex:1
      },
      newtext:{
        marginTop:20,
        marginBottom:30,
        color:'crimson',
        fontSize:25,
        fontStyle:'italic',
        fontWeight:'bold'
    }
  })
  export default CounterScreen;