import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const GridType = () => {
    const [options, setOptions] = useState([]);

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index) => setOptions(options.filter((_, i) => i !== index));

    return (
        <View>
            {/* First Row: Icon + Title */}
            <View style={styles.row}>
                <MaterialIcons name="grid-view" size={24} color="#007BFF" />
                <Text style={styles.headerTitle}>Grid Type</Text>
            </View>
            {/* Second Row: TextInput for Question */}
            <TextInput style={styles.input} placeholder="Question" />
            {/* Third Row: Options */}
            {options.map((option, index) => (
                <View key={index} style={styles.optionRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="Option"
                        value={option}
                        onChangeText={(text) =>
                            setOptions((prev) =>
                                prev.map((opt, i) => (i === index ? text : opt))
                            )
                        }
                    />
                    <TouchableOpacity onPress={() => removeOption(index)} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
            {/* Fourth Row: Buttons for Add Row and Add Column */}
            <View style={styles.buttonsRow}>
                <TouchableOpacity onPress={addOption} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Row</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={addOption} style={styles.addButton}>
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
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        fontSize: 14,
        marginBottom: 16,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: "blue"
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
        justifyContent: 'space-between',
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

export default GridType;
