import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {

    useEffect(() => {
    }, []);

    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate("FormTopTabNavigator", { data: 'Hi' })} >
                <Text style={style.text}>+</Text>
            </TouchableOpacity>
        </View>

    );
};

export default Home;

const style = StyleSheet.create({
    button: {
        backgroundColor: 'red',
    },
    text: {
        color: "white"
    }

});