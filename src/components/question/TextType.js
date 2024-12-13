import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TextType = () => (
    <View>
        {/* First Row: Icon + Title */}
        <View style={styles.row}>
            <FontAwesome name="font" size={24} color="#007BFF" />
            <Text style={styles.headerTitle}>Text Type</Text>
        </View>
        {/* Second Row: TextInput for Question */}
        <TextInput style={styles.input} placeholder="Question" />
    </View>
);

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
        marginBottom: 16,
    },
});

export default TextType;
