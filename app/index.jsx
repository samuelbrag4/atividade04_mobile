import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Link  from "expo-router";

export default function Screen() {
    return (
        <ImageBackground>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});