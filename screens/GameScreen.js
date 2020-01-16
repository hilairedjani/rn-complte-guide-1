import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyles from "../contants/default-styles"
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }

    return rndNum;
}

const renderListItem = (listLength, itemData) => <View style={styles.listItem}>
    <BodyText># {listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
</View>;

const GameScreen = (props) => {

    // const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    // const [rounds, setRounds] = useState(0);
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if ((direction === "lower" && currentGuess < userChoice) || (direction === "greater" && currentGuess > userChoice)) {
            Alert.alert("Don't cheat!", "You know that this is wrong...", [{ text: "Sorry", style: "cancel" }]);
            return;
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else if (direction === "greater") {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(currentRounds => currentRounds + 1);
        setPastGuesses((curPastGuesses) =>
            [nextNumber.toString(), ...curPastGuesses]
        );
    };

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Opponent's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, "lower")}><Ionicons name="md-remove" size={25} color="white"></Ionicons></MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, "greater")}><Ionicons name="md-add" size={25} color="white"></Ionicons></MainButton>
            </Card>

            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={(item) => item}
                    data={pastGuesses}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                ></FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "80%"
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "grey",
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: "white",
        width: "100%"
    },
    listContainer: {
        flex: 1,
        width: "60%"
    },
    list: {
        flexGrow: 1,
        justifyContent: "flex-end"
    }
})


export default GameScreen
