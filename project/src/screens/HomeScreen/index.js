import React, { useState } from 'react';
import {Text,Button,StyleSheet,Image,View,ImageBackground} from 'react-native';
import GetStartedButton from '../../components/GetStartedButton';
const HomeScreen=()=>{
    return(
        <View style={styles.steps}>
        <ImageBackground source={require('../../../assets/homeback.png')} resizeMode="cover" style={styles.image}>
        <View style={{flexDirection:"row", gap:"60px 60px"}}>
        <Image style={styles.logo} source={require('../../../assets/logo.png')}></Image>
            <Text style={styles.text}>The Finance App</Text>
            </View>
            <Image style={styles.img} source={require('../../../assets/money.png')}></Image>
            <Text style={styles.para}> Manage your finances simply!</Text>
            <Text style={styles.txt}>Money Management is now easier, feel all the convenience of our application :)</Text>
            <GetStartedButton/>
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
    logo:{
        marginTop:15,
        height:50,
        width:50
    },
    img:{
        display: 'flex',
        width:410,
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:20,
        //marginLeft:50
      },
      text:{
          marginTop:15,
          
          fontSize:40,
          color: 'black',
          fontWeight: 'bold',
    fontStyle: 'italic'
      },
      para:{
          marginTop:15,
        display: 'flex',
        textAlign: 'center',
          //marginLeft:50,
          fontSize:30,
          color:'black',
          //backgroundColor:'pink',
      },
      txt:{
        textAlign: 'center',
        fontSize:15,
          color:'black',
          marginTop:15,
          marginBottom:20

      },
      image:{
        flex:1
      }
})
export default HomeScreen;