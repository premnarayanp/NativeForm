import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TextType = ({ question }) => {
    return (

        <View style={styles.ansContainer}>
            <Text style={styles.ans}>Ans:- </Text>
            <TextInput style={styles.input} placeholder="Type Answer" disabled={true} />
        </View>
    );

}
const styles = StyleSheet.create({
    ansContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    ans: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        fontSize: 14,
        marginBottom: 16,
    },
});

export default TextType;
