import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextType, GridType, CheckBoxType } from './preview/index'

const QuestionViewCard = ({ question, index }) => {
    const renderQuestionContent = () => {
        switch (question.type) {
            case 'text':
                return <TextType question={question} />;
            case 'grid':
                return <GridType question={question} />;
            case 'checkbox':
                return <CheckBoxType question={question} />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionIndex}>Q.{index + 1}:- </Text>
                <Text style={styles.questionText}>{question.questionText}</Text>
            </View>
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

    questionContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        alignContent: 'center',
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue'
    },
    questionIndex: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },
    content: {
        marginTop: 10,
    },
});

export default QuestionViewCard;
