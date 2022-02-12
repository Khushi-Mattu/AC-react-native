import React, { useState } from 'react';
import {Text,Button,StyleSheet,View,ActivityIndicator,Modal,ScrollView,ImageBackground} from 'react-native';
import CreditCard from '../../components/Credit Card';
import Activities from '../../components/Activities';
import AccountInformation from '../../components/Account Information';
const GetStartedButton=()=>{
    const [indicator, setIndicator] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
            <ActivityIndicator size="large" color="blue" animating={indicator} />
       
    <View style={styles.button}>
    <Modal visible={modalOpen} animationType='slide'>
    <ImageBackground source={require('../../../assets/backgg.png')} resizeMode="cover" style={styles.image}>
    <ScrollView style={styles.flex}>
    
                        <View>
                            <CreditCard />
                        </View>

                        <View style={{ marginTop: 70, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                <AccountInformation />
                            </View>
                        </View>
                        <View style={styles.flex}>
                            <Activities />
                        </View>
                        
                    </ScrollView>
                    </ImageBackground>
                    
      
      </Modal>
        <Button
        title="Get Started !"
        onPress={() => {
          setModalOpen(true)} 
              }
        
      />
    </View>
    </>
    );
}
const styles = StyleSheet.create({
  steps:{
    flex:1,
    justifyContent: 'space-around',
    //alignItems: 'center'
    
    
  },
    button:{
        //marginTop:20,
        marginBottom:50,
        color:'crimson',
        fontSize:25,
        fontStyle:'italic',
        fontWeight:'bold',
        //backgroundColor:'pink'
    },
    flex: {
      flex: 1,
  },
  image:{
    display: 'flex',
    flex:1
  }
})
export default GetStartedButton;