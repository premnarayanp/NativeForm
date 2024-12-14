import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { QuestionCard } from '../../components/index';
import * as ImagePicker from 'expo-image-picker';
import QuestionModalSheet from '../../components/question/QuestionModalSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const questions = [
    {
        id: '1',
        type: 'text',
        questionText: 'What is your name?',
    },
    {
        id: '2',
        type: 'grid',
        questionText: 'Select your favorite fruits:',
    },
    {
        id: '3',
        type: 'checkbox',
        questionText: 'Select all the programming languages you know:',
    },
];

const QuestionTab = () => {
    const [headerImg, setHeaderImg] = useState(null); // State to store the selected image
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const pickImage = async () => {
        // Request permission to access media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access media library is required!');
            return;
        }

        // Open image picker
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setHeaderImg(result.assets[0].uri); // Set the selected image URI
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.card}>
                    {/* Input for form title */}
                    <TextInput style={styles.input} placeholder="Untitled Form" />

                    {/* Image Picker */}
                    <TouchableOpacity style={styles.headerImg} onPress={pickImage}>
                        {headerImg ? (
                            <Image source={{ uri: headerImg }} style={styles.imgPreview} />
                        ) : (
                            <Text style={styles.uploadHint}>+ Add Header IMG</Text>
                        )}
                    </TouchableOpacity>
                </View>

                {questions.map((item) => (
                    <QuestionCard question={item} key={item.id} />
                ))}

                {/* Dropdown sheet component */}
                <QuestionModalSheet isVisible={isModalVisible} onClose={closeModal} />
            </ScrollView>

            {/* Fixed button in bottom-right */}
            <TouchableOpacity onPress={openModal} style={styles.addQuestionButton}>
                <MaterialCommunityIcons name="plus" color={'blue'} size={40} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    scrollContainer: {
        padding: 16,
    },
    card: {
        borderLeftWidth: 4,
        borderLeftColor: '#007BFF',
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    input: {
        borderBottomWidth: 2,
        borderColor: 'gray',
        padding: 5,
        fontSize: 14,
        marginBottom: 16,
    },
    headerImg: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 16,
    },
    imgPreview: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    uploadHint: {
        fontSize: 16,
        color: '#007BFF',
    },
    addQuestionButton: {
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

export default QuestionTab;
