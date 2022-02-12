import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const Activities=()=> {
        return (
            <View style={styles.container}>
                <View style={{ ...styles.row, ...styles.spaceBetween, marginRight: 12 }}>
                    <Text style={{ ...styles.subtitle }}> Recent Activities</Text>
                </View>

            <View style={{ ...styles.row, ...styles.activityCard }}>
            <View style={{ flex: 1 }}>
                <Image source='../../../assets/user2.png' style={{ width: 30, height: 40 }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ ...styles.title }}>Khushi</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ ...styles.title, alignSelf: 'flex-end' }}>-6000$</Text>
            </View>
            
        </View>
        <View style={{ ...styles.row, ...styles.activityCard }}>
            <View style={{ flex: 1 }}>
                <Image source='../../../assets/user2.png' style={{ width: 30, height: 40 }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ ...styles.title }}>Sakshi</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ ...styles.title, alignSelf: 'flex-end' }}>-500$</Text>
            </View>
        

            </View>
            <View style={{ ...styles.row, ...styles.activityCard }}>
            <View style={{ flex: 1 }}>
                <Image source='../../../assets/user2.png' style={{ width: 30, height: 40 }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ ...styles.title }}>Taylor</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ ...styles.title, alignSelf: 'flex-end' }}>-4900$</Text>
            </View>
        

            </View>

            <View style={{ ...styles.row, ...styles.activityCard }}>
            <View style={{ flex: 1 }}>
                <Image source='../../../assets/user2.png' style={{ width: 30, height: 40 }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ ...styles.title }}>Harry</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ ...styles.title, alignSelf: 'flex-end' }}>-900$ </Text>
            </View>
        

            </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0,
        marginTop: 23
    },
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: 'column'
    },
    spaceBetween: {
        justifyContent: "space-between"
    },
    title: {
        fontWeight: "bold",
        color:'indigo',
        fontSize:20
    },
    subtitle:{
        fontWeight: "bold",
        color:'black',
        fontSize:20
    },
    activityCard: {
        padding: 10,
        backgroundColor: 'lightsalmon',
        marginTop: 12,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: "center",
        
    }
});

export default Activities