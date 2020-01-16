import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.25,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 5,
        padding: 20,
        margin: 5
    },
});


export default Card;
