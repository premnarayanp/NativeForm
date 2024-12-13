// Home.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormCard } from "../../components/index";

const formData = [
    { _id: "1", title: "Java Tech", headerImg: "https://via.placeholder.com/150" },
    { _id: "2", title: "React Native", headerImg: "https://via.placeholder.com/150" },
    { _id: "3", title: "Android", headerImg: "https://via.placeholder.com/150" },
];

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>All Forms</Text>
            <View style={styles.cardContainer}>
                {formData.map((form) => (
                    <FormCard key={form._id} form={form} />
                ))}
            </View>
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
});

export default Home;

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//     const navigation = useNavigation();

//     return (
//         <View className="flex-1 bg-gray-100 items-center justify-center">
//             <Text className="text-xl text-gray-800 font-bold mb-4">Home</Text>
//             <TouchableOpacity
//                 className="bg-blue-500 rounded-full p-4"
//                 onPress={() => navigation.navigate('FormTopTabNavigator')}
//             >
//                 <Text className="text-white text-lg font-bold">+</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default Home;
