// FormCard.js
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, Modal } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import CustomModal from "./CustomModal"

const FormCard = ({ form }) => {
    const [isDropDownVisible, setDropDownVisible] = useState(false);

    const toggleDropDown = () => setDropDownVisible(!isDropDownVisible);

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: form.headerImg }} style={styles.headerImage} />
            <Text style={styles.title}>{form.title}</Text>
            <TouchableOpacity onPress={toggleDropDown}>
                <Feather name="more-vertical" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>

            {isDropDownVisible && <CustomModal toggleDropDown={toggleDropDown} isDropDownVisible={isDropDownVisible} />
            }
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
        borderRadius: 8,
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
});

export default FormCard;