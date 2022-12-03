import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onRestart}) {
    return (
    <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>
            Ur phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>)
}

export default GameOverScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        borderRadius: deviceWidth < 380 ? 75 : 150,
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold'
    }
})