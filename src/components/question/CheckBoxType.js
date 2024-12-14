import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CheckBoxType = () => {
    const [choices, setChoices] = useState([]);

    const addChoice = () => setChoices([...choices, '']);
    const removeChoice = (index) => setChoices(choices.filter((_, i) => i !== index));
    return (
        <View>
            {/* First Row: Icon + Title */}
            <View style={styles.row}>
                <MaterialIcons name="check-box" size={24} color="#007BFF" />
                <Text style={styles.headerTitle}>CheckBox Type</Text>
            </View>
            {/* Second Row: TextInput for Question */}
            <TextInput style={styles.input} placeholder="Question" />
            {/* Third Row: Choices */}
            {choices.map((choice, index) => (
                <View key={index} style={styles.optionRow}>

                    <MaterialIcons name="check-box-outline-blank" size={24} color="#007BFF" />
                    <TextInput
                        style={styles.input}
                        placeholder="Option"
                        value={choice}
                        onChangeText={(text) =>
                            setChoices((prev) =>
                                prev.map((opt, i) => (i === index ? text : opt))
                            )
                        }
                    />
                    <TouchableOpacity onPress={() => removeChoice(index)} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
            {/* Fourth Row: Button for Add Choice */}
            <TouchableOpacity onPress={addChoice} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Choice</Text>
            </TouchableOpacity>
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
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 5,
        alignContent: 'center',
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
    addButton: {
        backgroundColor: '#007BFF',
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CheckBoxType;
