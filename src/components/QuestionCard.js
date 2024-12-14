import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextType, GridType, CheckBoxType } from './question/index'

const QuestionCard = ({ question }) => {
    const renderQuestionContent = () => {
        switch (question.type) {
            case 'text':
                return <TextType />;
            case 'grid':
                return <GridType />;
            case 'checkbox':
                return <CheckBoxType />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.content}>{renderQuestionContent()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderLeftWidth: 4,
        borderLeftColor: '#007BFF',
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        marginTop: 10,
    },
});

export default QuestionCard;
