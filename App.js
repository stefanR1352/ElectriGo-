import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import * as SecureStore from "expo-secure-store";
import { ClerkProvider,SignedIn, SignedOut  } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabNavigation from './App/Navigations/TabNavigation';
import * as Location from 'expo-location';
import { UserLocationContext } from './App/Context/UserLocationContext';
import GlobalApi from './App/Utils/GlobalApi';
import LoginPage from './App/Screen/LoginScreen/Login';


// SplashScreen.preventAutoHideAsync();
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const Stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  //Default Location
  const [location, setLocation] = useState({
    latitude:35.231120,
    longitude:-80.838300
  });
  const [errorMsg, setErrorMsg] = useState(null);
 
  useEffect(() => {
    
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log("DENINED")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
     setLocation(location.coords);
      if(!location?.coords)
      {
        setLocation({ 
          latitude:'35.231120',
          longitude:'-80.838300',
        })
      }
     console.log("--m",location.coords)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={GlobalApi.CLERK_API_KEY}>
    <UserLocationContext.Provider 
    value={{location,setLocation}}>
    <View style={styles.container}>
      <SignedIn>
       
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginPage">
            <Stack.Screen name="LoginPage" component={LoginPage} options={{
              headerShown:false }}/>
            <Stack.Screen name="Tab" component={TabNavigation}  options={{
              headerShown:false,
            }}/>
            
        
          </Stack.Navigator>
        </NavigationContainer>
      </SignedOut>
      
      <StatusBar style="auto" />
    </View>
    </UserLocationContext.Provider>
    </ClerkProvider>
  
  );
  // return (
  // <NavigationContainer>
      // <Stack.Navigator>
      //   <Stack.Screen name="Tab" component={TabNavigation}  options={{
      //     headerShown:false,
      //   }}/>
      //   <Stack.Screen name="LoginPage" component={LoginPage} options={{
      //     headerShown:false }}/>
        
      //   </Stack.Navigator>
  //   </NavigationContainer>

  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:25
  },
});
