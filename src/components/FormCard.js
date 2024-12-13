// FormCard.js
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, Modal } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';


const FormCard = ({ form }) => {
    const [isDropDownVisible, setDropDownVisible] = useState(false);

    const toggleDropDown = () => setDropDownVisible(!isDropDownVisible);

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: form.headerIgm }} style={styles.headerImage} />
            <Text style={styles.title}>{form.title}</Text>
            <TouchableOpacity onPress={toggleDropDown}>
                <Feather name="more-vertical" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>

            {isDropDownVisible && (
                <Modal transparent animationType="fade" visible={isDropDownVisible}>
                    <View style={styles.dropdownOverlay}>
                        <View style={styles.dropdownContainer}>
                            <TouchableOpacity style={styles.closeButton} onPress={toggleDropDown}>
                                <MaterialIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem}>
                                <Feather name="edit" size={18} color="black" />
                                <Text style={styles.dropdownText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem}>
                                <Feather name="trash-2" size={18} color="black" />
                                <Text style={styles.dropdownText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem}>
                                <Feather name="eye" size={18} color="black" />
                                <Text style={styles.dropdownText}>View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem}>
                                <Feather name="share-2" size={18} color="black" />
                                <Text style={styles.dropdownText}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        width: '90%',
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    title: {
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
        fontWeight: '500',
    },
    icon: {
        padding: 8,
    },
    dropdownOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
    },
});

export default FormCard;