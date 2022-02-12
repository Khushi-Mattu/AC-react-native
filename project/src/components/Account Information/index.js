import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'




const AccountInformation=()=> {
   
        return (
            <View style={styles.column}>
            <Text style={styles.title}>Balance</Text>
            <View style={{ ...styles.row, justifyContent: "flex-end" }}>
                <Text style={styles.subTitle}>50,000 $</Text>
            </View>

        </View>
        )
    }

    const styles = StyleSheet.create({
        inforContainer: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: 'white',
            padding: 20,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25
        },
        row: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
        },
        column: {
            flexDirection: 'column',
        },
        title: {
            fontWeight: '500',
            fontSize:30,
            color: 'black',
        },
        subTitle: {
            fontWeight: '500',
            fontSize:30,
            color: 'black',
            alignSelf: "flex-end",
            marginBottom:30
        },
        currency: {
            fontSize: 9, 
            fontWeight: 'bold', 
            alignSelf: "flex-end"
        }
    });

export default AccountInformation