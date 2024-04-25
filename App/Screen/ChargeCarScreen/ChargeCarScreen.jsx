import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../Utils/Colors";
import Header from "../Addcar/HeaderCar";

export default function ChargeCar({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    
    <SafeAreaView style={styles.container}>
      
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={styles.camera}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <TouchableOpacity style={styles.button2}>
            <Text style={{textAlign:'center', fontSize:24,fontFamily:'Inria Sans', color:Colors.BLACK}}>
                Start charging
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
    camera: {
    alignSelf: 'center',
    width: 320, // specify the size of the square
    height: 400, // make sure height and width are the same for a perfect square
    borderRadius: 100, // adjust for desired roundness of corners
    padding:80,
    fontFamily:'Times New Roman',

    // Add any additional styling as needed
  },
  button2:{
    padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius: 10,
        marginTop:80,
        width:300,
        height:75,
        alignSelf:2,
  },
  headerCont: {
    padding: 26,
    paddingBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
}
});