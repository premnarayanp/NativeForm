// Home.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FormCard } from "../../components/index";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFormList, addCurrentForm } from '../../redux/action/formActions';

const formData = [
    { _id: "1", title: "Java Tech", headerImg: "data:image/png;base64,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" },
    { _id: "2", title: "React Native", headerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzArQZ3kaH44H3VPxAWYy55d4VHwAk9lqt5DTaJd_uAuGJ1KT7d-wuT8Q&s" },
    { _id: "3", title: "Android", headerImg: "https://www.google.com/search?sca_esv=78b8ee73f7df5aa0&biw=1366&bih=599&sxsrf=ADLYWII2Lfq3gRu9qa12T73p_p8PhUo0ig:1734254686110&q=%E0%A4%B8%E0%A5%80+%E0%A4%94%E0%A4%B0+%2B&stick=H4sIAAAAAAAAAOMwVOLQz9U3yEovTP_FyLCBheEVCw8XF0jIvDgpOy3pFQsXF1iFaZVhPJxjVGBpDueA9MI5ZgbZZa9YuLk4wUaYmZpnI6TS0kzhplumJ1VkFb1i4eXiBnENDYpTTCqN4WoNS8ySFrHyP1iy48HSBoUHS6Y8WLJBQfsWmyRD99Me48D4kIJ3Ks0HpQ7tWfLU5Oe62WXeqxZxGD5YsunB0u4HS6YDNax_sGQnkFoL0T4NLD7nwZIlD5a2A_k7HyzteLCkaQUHIwC2FZc6AQEAAA&sa=X&ved=2ahUKEwi44o-UuqmKAxUpumMGHZI3AdIQs9oBKAB6BAhDEBg" },
];

const Home = () => {
    const dispatch = useDispatch();
    const formList = useSelector((state) => state.formReducer.formList);
    const navigation = useNavigation();

    useEffect(() => {
        async function FetchData() {
            dispatch(addFormList(formData));
        }
        FetchData();

    }, [dispatch]);

    const createNewForm = () => {
        dispatch(addCurrentForm({ formTitle: "", headerImg: "" }));
        navigation.navigate('FormTopTabNavigator')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>All Forms</Text>
            <View style={styles.cardContainer}>
                <FlatList
                    data={formList}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <FormCard form={item} />}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <TouchableOpacity onPress={createNewForm} style={styles.createFormButton}>
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

