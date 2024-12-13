// Home.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FormCard } from "../../components/index";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const formData = [
    { _id: "1", title: "Java Tech", headerImg: "https://via.placeholder.com/150" },
    { _id: "2", title: "React Native", headerImg: "https://via.placeholder.com/150" },
    { _id: "3", title: "Android", headerImg: "https://via.placeholder.com/150" },
];

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>All Forms</Text>
            <View style={styles.cardContainer}>
                <FlatList
                    data={formData}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <FormCard form={item} />}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('FormTopTabNavigator')} style={styles.createFormButton}>
                <MaterialCommunityIcons name="plus" color={'blue'} size={40} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    cardContainer: {
        flexDirection: 'column',
        gap: 12,
    },
    listContainer: {
        paddingBottom: 20, // To provide spacing at the bottom
    },
    createFormButton: {
        position: 'absolute',
        right: 20, // Distance from the right edge
        bottom: 20, // Distance from the bottom edge
        backgroundColor: '#fff', // Background color for the button
        padding: 10, // Padding around the icon
        borderRadius: 50, // Makes the button circular
        shadowColor: '#000', // Adds a shadow
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
});

export default Home;

