import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import DefaultStyles from "../contants/default-styles"
import colors from '../contants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over</TitleText>
            <View style={DefaultStyles.imageContainer}>
                <Image source={require("../assets/success.png")} style={DefaultStyles.image} resizeMode="cover"></Image>
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    resultText: {
        textAlign: "center",
        fontSize: 17.5
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    highlight: {
        color: colors.primary,
        fontFamily: "open-sans-bold"
    }
})


export default GameOverScreen
