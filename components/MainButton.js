import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../contants/colors';

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12.5,
        paddingHorizontal: 20,
        borderRadius: 25,
        elevation: 2.5
    },
    buttonText: {
        color: "white",
        fontFamily: "open-sans",
        fontSize: 18
    }
});


export default MainButton;
