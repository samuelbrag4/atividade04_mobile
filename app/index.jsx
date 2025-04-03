import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Screen() {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../assets/image 9.png")}
        style={styles.background}
        resizeMode="cover" 
      ></ImageBackground>

      <View style={styles.container}>
        <Text style={styles.title}>Olá, Tudo bem?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
  },
  background: {
    flex: 1, 
    position: "absolute", 
    width: "100%", 
    height: "100%", 
  },
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", 
  },
});