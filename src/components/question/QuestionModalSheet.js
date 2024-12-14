import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuestionModalSheet = ({ isVisible, onClose }) => {
    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.bottomSheet}>
                    {/* Close Button */}
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <MaterialCommunityIcons name="close" color="black" size={24} />
                    </TouchableOpacity>

                    {/* Add Question Options */}
                    <View style={styles.optionsContainer}>
                        {[
                            { type: 'text', title: 'Text Type', icon: 'text' },
                            { type: 'grid', title: 'Grid Types', icon: 'grid' },
                            { type: 'checkbox', title: 'CheckBox Types', icon: 'checkbox-marked-outline' },
                        ].map((option) => (
                            <View key={option.type} style={styles.optionRow}>
                                <MaterialCommunityIcons name={option.icon} size={24} color="blue" />
                                <Text style={styles.optionTitle}>{option.title}</Text>
                                <TouchableOpacity style={styles.optionButton}>
                                    <Text style={styles.buttonText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default QuestionModalSheet;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    bottomSheet: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '50%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },
    optionsContainer: {
        marginTop: 40,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginHorizontal: 10,
        flex: 1,
    },
    optionButton: {
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
    },
});
