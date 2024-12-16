import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CheckBoxType = ({ question }) => {
    const { checkBoxOption } = question;
    return (
        <View>
            {/* First: Choices */}
            {checkBoxOption.map((choice, index) => (
                <View key={index} style={styles.optionRow}>
                    <MaterialIcons name="check-box-outline-blank" size={24} color="#007BFF" />
                    <Text style={styles.option}>{choice}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 5,
        alignContent: 'center',
    },

    option: {
        color: 'gray',
        fontWeight: 'bold',
        marginLeft: 10,
    },

});

export default CheckBoxType;
