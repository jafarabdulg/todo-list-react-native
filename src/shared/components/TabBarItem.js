import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabBarItem(props) {
    const {
        title,
        setType,
        type,
        selected,
    } = props

    return (
        <TouchableOpacity
        style={[
            styles.container,
            selected ? styles.selected : null
        ]}
        onPress={setType}
        >
            <Text
            style={[
                styles.text,
                type === title ? styles.bold : null
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    text: {
        color: '#000',
        fontSize: 17
    },
    bold: {
        fontWeight: 'bold'
    },
    selected: {
        backgroundColor: '#FFFF'
    },
    border: {
        borderWidth: 1,
        borderColor: '#DDDD'
    }
})
