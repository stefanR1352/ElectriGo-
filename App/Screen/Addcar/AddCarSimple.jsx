import React, { useState, useCallback } from 'react';
import { FlatList, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Header from './HeaderCar';
import Colors from '../../Utils/Colors';

const AddCarSimple = () => {
    const [carDetails, setCarDetails] = useState({
        carModel: '',
        carMake: '',
        carYear: '',
        carCharging: ''
    });
    const [cars, setCars] = useState([]);

    const handleInputChange = useCallback((name, value) => {
        setCarDetails(currentDetails => ({
            ...currentDetails,
            [name]: value
        }));
    }, []);

    const handleSubmit = () => {
        setCars(currentCars => [...currentCars, carDetails]);
        Alert.alert('Car Added', `Model: ${carDetails.carModel}, Make: ${carDetails.carMake}, Year: ${carDetails.carYear}, Charging type: ${carDetails.carCharging}`);
        setCarDetails({
            carModel: '',
            carMake: '',
            carYear: '',
            carCharging: ''
        });
    };

    const renderCarItem = ({ item }) => (
        <View style={styles.carItem}>
            <Text style={styles.carText}>Model: {item.carModel}</Text>
            <Text style={styles.carText}>Make: {item.carMake}</Text>
            <Text style={styles.carText}>Year: {item.carYear}</Text>
            <Text style={styles.carText}>Charging: {item.carCharging}</Text>
        </View>
    );

    const renderHeader = () => (
        <View>
            <View style={styles.headerCont}>
                <Header />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Add Your Car</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Car Model"
                    value={carDetails.carModel}
                    onChangeText={(text) => handleInputChange('carModel', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Car Make"
                    value={carDetails.carMake}
                    onChangeText={(text) => handleInputChange('carMake', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Car Year"
                    keyboardType="numeric"
                    value={carDetails.carYear}
                    onChangeText={(text) => handleInputChange('carYear', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Car Charging type"
                    value={carDetails.carCharging}
                    onChangeText={(text) => handleInputChange('carCharging', text)}
                />
                <Button title="Add Car" onPress={handleSubmit} />
            </View>
        </View>
    );

    return (
        <FlatList
            data={cars}
            renderItem={renderCarItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            ListHeaderComponent={renderHeader}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    headerCont: {
        padding: 26,
        paddingBottom: 10,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE,
    },
    container: {
        marginTop: 100,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    carItem: {
        flex: 1,
        margin: 10,
        padding: 15,
        backgroundColor: Colors.lightGrey,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
    },
    carText: {
        fontSize: 16,
        color: '#000',
    },
    listContainer: {
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
});

export default AddCarSimple;