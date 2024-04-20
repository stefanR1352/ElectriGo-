import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Utils/Colors'
import HeaderCar from './HeaderCar'
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useUser } from '@clerk/clerk-expo';
import { app } from '../../Utils/FirebaseConfig';
import PlaceItem from '../HomeScreen/PlaceItem';
import { StyleSheet } from 'react-native';

export default function FavoriteScreen() {
  const db = getFirestore(app);
  const { user } = useUser();
  const [favList, setFavList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    user && getFav();
  }, [user])

  /**
   * Get All Fav List list of places from firebase
   */
  const getFav = async () => {
    setLoading(true)
    setFavList([])
    const q = query(collection(db, "ev-fav-place"),
      where("email", "==", user?.primaryEmailAddress?.emailAddress));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setFavList(favList => [...favList, doc.data()]);
      setLoading(false);
    });
  }
  return (
    <View >
        <View style={styles.headerCont}>
        <HeaderCar/>
        </View>
      

      
    
    </View>
  )
}
const styles = StyleSheet.create({
    headerCont: {
        position: 'absolute',
        zIndex: 10,
        padding: 26,
        paddingBottom: 10,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE,
      },
})
