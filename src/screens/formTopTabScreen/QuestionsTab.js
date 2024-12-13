import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { QuestionCard } from '../../components/index';

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
    return (
        <View style={styles.container}>
            <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <QuestionCard question={item} />}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    listContainer: {
        paddingBottom: 20,
    },
});

export default QuestionTab;
