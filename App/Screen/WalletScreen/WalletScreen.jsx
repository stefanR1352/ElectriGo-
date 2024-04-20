import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Utils/Colors'
import HeaderWallet from './HeaderWallet'
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
        <HeaderWallet/>
        </View>
        <View style={styles.Cont1}>
        </View>
        <View style={styles.roundedSquare}>

        </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    headerCont: {
        padding: 26,
        paddingBottom: 10,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE,
      },
      Cont1: {
        zIndex: 10,
        padding: 26,
        paddingBottom: 10,
        width: '100%',
        paddingHorizontal: 20,
      },
      roundedSquare: {
        alignSelf: 'center',
        width: 320, // specify the size of the square
        height: 400, // make sure height and width are the same for a perfect square
        borderRadius: 60, // adjust for desired roundness of corners
        backgroundColor: Colors.GRAY, // choose a background color
        shadowOpacity:50,
        shadowRadius:20,
        shadowColor:Colors.BLACK,
        // Add any additional styling as needed
      },
})
