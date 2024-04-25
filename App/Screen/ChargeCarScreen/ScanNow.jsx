import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import Header from '../Addcar/HeaderCar'


export default function ScanNow({navigation}) {
  return (
    <View>
        <View style={styles.headerCont}>
                <Header />
            </View>
        <TouchableOpacity style={styles.button2} 
            onPress={() => navigation.navigate("Charge")}>
            <Text style={{textAlign:'center', fontSize:24,fontFamily:'Inria Sans', color:Colors.BLACK}}>
                Scan the Station
            </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    button2:{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius: 10,
        marginTop:270,
        width:300,
        height:75,
        alignSelf:2,
        //borderWidth: 3, 
        //borderColor: Colors.BORDER,
        
    },
    headerCont: {
        padding: 26,
        paddingBottom: 10,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE,
    }
})