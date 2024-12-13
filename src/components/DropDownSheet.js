// DropDownSheet.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DropDownSheet = ({ onClose }) => {
    const options = [
        { label: 'Edit', icon: 'edit' },
        { label: 'Delete', icon: 'delete' },
        { label: 'View', icon: 'visibility' },
        { label: 'Share', icon: 'share' },
    ];

    return (
        <View style={styles.dropdownContainer}>
            {options.map((option, index) => (
                <TouchableOpacity key={index} style={styles.option} onPress={onClose}>
                    <MaterialIcons name={option.icon} size={24} color="black" />
                    <Text style={styles.optionText}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        position: 'absolute',
        right: 0,
        top: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    optionText: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default DropDownSheet;