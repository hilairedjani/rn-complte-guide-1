import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    return (
        <TextInput {...props} style={[styles.input, props.style]}></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginVertical: 10,
        width: "100%"
    }
})


export default Input
