import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Link from "expo-router";

export default function Screen() {
    return (
        <ImageBackground
            source={require("../assets/image 9.png")} // Caminho da imagem de fundo
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Olá, Tudo bem?</Text>
                {/* Adicione mais elementos aqui */}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});