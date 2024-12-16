import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GridType = ({ question }) => {
    const { gridRowOption, gridColumnOption } = question;

    return (
        <View style={styles.container}>
            {/* Table Header */}
            <View style={[styles.row, styles.headerRow]}>
                <Text style={[styles.cell, styles.headerCell]}>Coll & Row</Text>
                {gridColumnOption.map((colOption, index) => (
                    <Text key={index} style={[styles.cell, styles.headerCell]}>
                        {colOption}
                    </Text>
                ))}
            </View>

            {/* Table Body */}
            {gridRowOption.map((rowOption, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    <Text style={[styles.cell, styles.rowHeader]}>{rowOption}</Text>
                    {gridColumnOption.map((colOption, colIndex) => (
                        <TouchableOpacity
                            key={colIndex}
                            style={[styles.cell, styles.radioCell]}
                            onPress={() => console.log(`Selected: ${rowOption} - ${colOption}`)}
                        >
                            <View style={styles.radioOuter}>
                                <View style={styles.radioInner} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerRow: {
        backgroundColor: "#f8f9fa",
        paddingVertical: 8,
    },
    cell: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        textAlign: "center",
    },
    headerCell: {
        fontWeight: "bold",
        fontSize: 16,
    },
    rowHeader: {
        fontWeight: "bold",
    },
    radioCell: {
        justifyContent: "center",
        alignItems: "center",
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#007BFF",
        justifyContent: "center",
        alignItems: "center",
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#007BFF",
    },
});

export default GridType;
