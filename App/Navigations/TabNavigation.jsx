import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import Addcar from '../Screen/Addcar/Addcar'
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import WalletScreen from '../Screen/WalletScreen/WalletScreen'
import Colors from '../Utils/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab=createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
       <Tab.Screen name='home'
       component={HomeScreen}
            options={{
                tabBarLabel:'Search',
                tabBarActiveTintColor:Colors.PRIMARY,
                tabBarIcon:({color,size})=>(
                    <Entypo name="location" size={24} color="black" />
                )
            }} />
             <Tab.Screen name='wallet'
       component={WalletScreen}
            options={{
                tabBarLabel:'Wallet',
                tabBarActiveTintColor:Colors.PRIMARY,
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="wallet" size={22} color="black" />
                )
            }} />
        <Tab.Screen name='add'
       component={Addcar} 
       options={{
        tabBarLabel:'Add car',
        tabBarActiveTintColor:Colors.PRIMARY,
        tabBarIcon:({color,size})=>(
            <FontAwesome name="car" size={24} color="black" />
        )
    }} />
        <Tab.Screen name='profile'
       component={ProfileScreen} 
       options={{
        tabBarLabel:'Profile',
        tabBarActiveTintColor:Colors.PRIMARY,
        tabBarIcon:({color,size})=>(
            <MaterialIcons name="account-circle" size={27} color="black" />
        )
    }} />
    </Tab.Navigator>
  )
}