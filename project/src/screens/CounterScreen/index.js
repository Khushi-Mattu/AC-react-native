import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
import CounterButton from '../../components/CounterButton';

const CounterScreen = () => {
    return (
      <View style={styles.steps}>
      <Text style={styles.text}> Drinking water is very important!</Text>
      <Text style={styles.text}> So, here's a counter to keep your  water intake in check!</Text>
       <Image source={require('../../../assets/bottle.png')} style={styles.backgroundImage}></Image>
       <CounterButton />
      </View>
    );
  }

  const styles = StyleSheet.create({
      steps:{
        flex:1,
        backgroundColor: 'dodgerblue',
        justifyContent: 'space-around',
        backgroundColor:'dodgerblue'
        //alignItems: 'center'
      },
      backgroundImage:{
        //display:flex,
        marginTop:40,
        marginBottom:40,
        width: win.width/2,
    height: (0.75)*win.width,
    resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //height:100
        
      },
      text:{
        fontSize:25,
        color:'indigo',
        //backgroundColor:'deepskyblue',
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center'
      },
      button:{
        backgroundColor:'pink',
        
      }
  })
  export default CounterScreen;