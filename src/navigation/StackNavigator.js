import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, FormViewer, FormEditor } from '../screens/mainStackScreens/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FormTopTabNavigator from './FormTopTabNavigator';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const Stack = createNativeStackNavigator();
const brandLogo = require('../assets/brandLogo.png');
const myProfilePic = require('../assets/my_photos.png');


const StackNavigator = () => {

    const HomeHeaderLeft = (props) => (
        <View style={style.header}>
            <TouchableOpacity style={{ marginRight: 5 }}>
                <Image alt='pro-pic' style={style.brandLogo}
                    source={brandLogo}
                />
            </TouchableOpacity>

            <View>
                <Text style={{ fontSize: 15, }}>All Form</Text>
            </View>
        </View>
    );


    const HomeHeaderRight = (props) => (
        <View style={style.header}>
            <TouchableOpacity style={{ marginRight: 10 }}>
                <MaterialCommunityIcons name="magnify" color="gray" size={30} />
            </TouchableOpacity>

            <TouchableOpacity >
                <Image alt='pro-pic' style={style.avatarImg}
                    source={myProfilePic}
                />
            </TouchableOpacity>
        </View>
    )

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        title: "",//() => null,//It give Warning Components not a valid child
                        headerLeft: HomeHeaderLeft,
                        headerRight: HomeHeaderRight,
                    }}
                />

                <Stack.Screen
                    name='FormTopTabNavigator'
                    component={FormTopTabNavigator}
                />

                <Stack.Screen
                    name='FormEditor'
                    component={FormEditor}
                />

                <Stack.Screen
                    name='FormViewer'
                    component={FormViewer}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default StackNavigator;

const style = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
    },

    avatarImg: {
        height: 40,
        width: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "gray",
        resizeMode: 'cover',
    },
    brandLogo: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
    }

});