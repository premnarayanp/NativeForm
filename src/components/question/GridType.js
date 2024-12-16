import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { updateQuestionToLists, addObOptions, updateOptions, deleteOptions } from '../../redux/action/questionAction';


const GridType = ({ question }) => {
    const { id, questionText, gridRowOption, gridColumnOption } = question;
    const dispatch = useDispatch();

    const handleQuestionTextUpdate = (value) => {
        dispatch(updateQuestionToLists({ updatedQuestion: value, id: id }))
    }

    const handleOptionAdd = (optionKey) => {
        dispatch(addObOptions({ optionKey, questionId: id, data: "" }))
    }

    const handleOptionUpdate = (text, index, optionKey) => {
        dispatch(updateOptions({ questionId: id, optionKey, newData: text, index }))
    }

    const handleOptionDelete = (index, optionKey) => {
        dispatch(deleteOptions({ optionKey, questionId: id, index }))
    }


    return (
        <View>
            {/* First Row: Icon + Title */}
            <View style={styles.row}>
                <MaterialIcons name="grid-view" size={24} color="#007BFF" />
                <Text style={styles.headerTitle}>Grid Type</Text>
            </View>
            {/* Second Row: TextInput for Question */}
            <TextInput style={styles.input} placeholder="Question" value={questionText} onChangeText={handleQuestionTextUpdate} />
            {/* Third Row: Options */}
            {gridRowOption.map((option, index) => (
                <View key={index} style={styles.optionRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="Option"
                        value={option}
                        onChangeText={(text) => handleOptionUpdate(text, index, "gridRowOption")}
                    />
                    <TouchableOpacity onPress={() => handleOptionDelete(index, "gridRowOption")} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}

            {/* Fourth Row: Buttons for Add Row and Add Column */}
            <View style={styles.buttonsRow}>
                <TouchableOpacity onPress={() => handleOptionAdd("gridRowOption")} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Row</Text>
                </TouchableOpacity>
            </View>


            {gridColumnOption.map((option, index) => (
                <View key={index} style={styles.optionRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="Option"
                        value={option}
                        onChangeText={(text) => handleOptionUpdate(text, index, "gridColumnOption")}
                    />
                    <TouchableOpacity onPress={() => handleOptionDelete(index, "gridColumnOption")} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
            {/* Fourth Row: Buttons for Add Row and Add Column */}
            <View style={styles.buttonsRow}>
                <TouchableOpacity onPress={() => handleOptionAdd("gridColumnOption")} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Column</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerTitle: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        fontSize: 14,
        // marginBottom: 16,
        flex: 1,
        // borderBottomWidth: 2,
        // borderBottomColor: "blue"
    },
    optionRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: 6
    },
    removeButton: {
        marginLeft: 10,
        backgroundColor: '#FF6B6B',
        borderRadius: 4,
        padding: 8,
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonsRow: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    addButton: {
        backgroundColor: '#007BFF',
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default GridType;
