import { View, Text, TextInput, Image,ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function LoginPage({navigation}) {
  return (
    <ScrollView style={{backgroundColor:Colors.WHITE}}>
        <View style={{height: 1100}}>
             <Image source = {require('../../../assets/images/ElectriGo6.png')} 
                style={styles.loginImage}
            /> 
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            {/* TextINput */}
            <View style={styles.container}>
                <TextInput 
                    placeholder='Email' placeholderTextColor={'gray'} style={styles.EMail}/>
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder='Password' placeholderTextColor={'gray'} style={styles.EMail} secureTextEntry/>
            </View>

            <TouchableOpacity style={styles.button2} 
            onPress={() => navigation.navigate("Tab")}>
            <Text style={{textAlign:'center', fontSize:24,fontFamily:'Inria Sans', color:Colors.BLACK}}>
                Login
            </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    EMail:{
        padding:15,
        border:1,
        fontSize:18,

    },
     loginImage:{
        width:300,
        height: 260,
        marginTop:100,
        alignSelf:2,
    },
    button2:{
        padding:20,
        backgroundColor:Colors.BEST,
        borderRadius: 10,
        marginTop:50,
        width:300,
        height:70,
        alignSelf:2,
        borderWidth: 3, 
        borderColor: Colors.BORDER,
        
    },
    container:{
        backgroundColor:'white',
        height:50,
        width:'90%',
        alignSelf:2,
        
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        marginVertical:10,
        
    }

})