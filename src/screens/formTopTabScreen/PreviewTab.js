import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { QuestionViewCard } from '../../components/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';



const PreviewTab = () => {

    const questions = useSelector((state) => state.questionReducer.questions);
    const currentForm = useSelector((state) => state.formReducer.currentForm);
    const { formTitle, headerImg } = currentForm;
    // console.log("currentForm--", currentForm);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.card}>
                    {/* Input for form title */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.formTitle}>{formTitle}</Text>
                        <Image source={{ uri: headerImg }} style={styles.imgPreview} />
                    </View>
                </View>

                {questions.map((item, index) => (
                    <QuestionViewCard question={item} key={item.id} index={index} />
                ))}

            </ScrollView>
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
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 10,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#007BFF',
        paddingBottom: 16,
        marginBottom: 16,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
        textAlign: 'center',
    },
    imgPreview: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f9f9f9',
//     },
//     scrollContainer: {
//         padding: 16,
//     },
//     card: {
//         // borderLeftWidth: 4,
//         // borderLeftColor: '#007BFF',
//         backgroundColor: '#fff',
//         padding: 16,
//         marginBottom: 10,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 4,
//         elevation: 2,
//     },

//     titleContainer: {
//         display: 'flex',
//         alignContent: 'center',
//         justifyContent: 'center',
//         alignItems: "center",
//         borderBottomColor: 'blue',
//         flexDirection: 'column'

//     },
//     formTitle: {
//         fontSize: 20,
//         borderBottomWidth: 2,
//     },
//     headerImg: {
//         height: 120,
//         borderRadius: 8,
//         marginTop: 5
//     },
//     imgPreview: {
//         width: '100%',
//         height: 120,
//         borderRadius: 8,
//     },

// });

export default PreviewTab;
