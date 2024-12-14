import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const GridType = () => {
    const [column, setColumn] = useState([]);
    const [row, setRow] = useState([]);

    const addColumn = () => setColumn([...column, '']);
    const removeColumn = (index) => setColumn(column.filter((_, i) => i !== index));

    const addRow = () => setRow([...row, '']);
    const removeRow = (index) => setRow(row.filter((_, i) => i !== index));

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
            {row.map((option, index) => (
                <View key={index} style={styles.optionRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="Option"
                        value={option}
                        onChangeText={(text) =>
                            setRow((prev) =>
                                prev.map((opt, i) => (i === index ? text : opt))
                            )
                        }
                    />
                    <TouchableOpacity onPress={() => removeRow(index)} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
            {/* Fourth Row: Buttons for Add Row and Add Column */}
            <View style={styles.buttonsRow}>
                <TouchableOpacity onPress={addRow} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Row</Text>
                </TouchableOpacity>
            </View>


            {column.map((option, index) => (
                <View key={index} style={styles.optionRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="Option"
                        value={option}
                        onChangeText={(text) =>
                            setColumn((prev) =>
                                prev.map((opt, i) => (i === index ? text : opt))
                            )
                        }
                    />
                    <TouchableOpacity onPress={() => removeColumn(index)} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
            {/* Fourth Row: Buttons for Add Row and Add Column */}
            <View style={styles.buttonsRow}>
                <TouchableOpacity onPress={addColumn} style={styles.addButton}>
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
