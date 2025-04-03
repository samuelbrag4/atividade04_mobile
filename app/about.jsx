import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const bars = [
    {
      title: "Praias Deslumbrantes",
      content: `Baía do Sancho: Considerada uma das melhores praias do mundo, com um acesso desafiador, mas recompensado por uma vista espetacular e uma areia branquíssima.
      
Praia do Leão: Um local perfeito para quem busca tranquilidade e uma paisagem deslumbrante.

Praia do Sueste: Ideal para quem deseja praticar snorkel e explorar a vida marinha.`,
      icon: "water-outline",
    },
    {
      title: "Mergulho e Snorkel",
      content: `Fernando de Noronha é um dos melhores lugares do mundo para a prática de mergulho. Com uma fauna marinha rica e águas claras, você pode nadar ao lado de tartarugas, golfinhos, arraias e até tubarões. As opções de snorkel em locais como o Cacimba do Padre e a Baía do Sueste são imperdíveis!`,
      icon: "fish-outline",
    },
    {
      title: "Trilhas e Aventuras ao Ar Livre",
      content: `Trilha do Atalaia: Leva a uma piscina natural repleta de peixes coloridos.

Trilha do Morro do Pico: Desafiante, mas oferece uma das vistas mais incríveis do arquipélago.`,
      icon: "walk-outline",
    },
    {
      title: "Cultura Local e Gastronomia",
      content: `Além das belezas naturais, Fernando de Noronha também oferece uma rica cultura local. Explore a história da ilha no Museu do Tubarão ou saboreie pratos típicos no restaurante da ilha, que traz um delicioso mix da culinária nordestina com toques especiais dos frutos do mar fresquíssimos.`,
      icon: "restaurant-outline",
    },
    {
      title: "Dicas Importantes para sua Visita",
      content: `Respeite a natureza: Fernando de Noronha é um parque nacional, e a preservação do meio ambiente é fundamental para garantir que as futuras gerações também possam desfrutar de sua beleza.

Prepare-se para o clima: O clima é tropical, com temperaturas agradáveis durante o ano inteiro, mas não se esqueça de levar protetor solar, chapéu e repelente.

Visita com responsabilidade: O número de visitantes é limitado, e a preservação do ecossistema da ilha depende do cuidado de todos. Não deixe lixo para trás e siga as orientações dos guias locais.`,
      icon: "information-circle-outline",
    },
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Imagem no topo */}
      <ImageBackground
        source={require("../assets/image 9.png")}
        style={styles.headerImage}
        resizeMode="cover"
      >
      </ImageBackground>

      <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Fernando de Noronha</Text>
          <Text style={styles.headerSubtitle}>Paraíso Natural</Text>
        </View>

      <View style={styles.introContainer}>
        <Text style={styles.introText}>
          Fernando de Noronha é um dos destinos mais deslumbrantes do Brasil, conhecido por suas praias paradisíacas, rica biodiversidade e paisagens de tirar o fôlego. Este arquipélago, localizado a cerca de 350 km da costa de Pernambuco, é um verdadeiro paraíso para os amantes da natureza e da aventura. Se você está planejando sua visita ou já está aqui, nossa página foi criada para ajudá-lo a explorar tudo o que essa ilha mágica tem a oferecer.
        </Text>
        <Text style={styles.sectionTitle}>O que fazer em Fernando de Noronha:</Text>
      </View>

      <View style={styles.container}>
        {bars.map((bar, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.bar}
              onPress={() => toggleContent(index)}
            >
              <Ionicons name={bar.icon} size={24} color="#000" />
              <Text style={styles.barTitle}>{bar.title}</Text>
              <Ionicons
                name={
                  expandedIndex === index
                    ? "chevron-up-outline"
                    : "chevron-down-outline"
                }
                size={24}
                color="#000"
              />
            </TouchableOpacity>

            {expandedIndex === index && (
              <View style={styles.hiddenContent}>
                <Text>{bar.content}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    color: "#000",
    padding: 10,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  introContainer: {
    padding: 20,
  },
  introText: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    width: 400,
    marginBottom: 10,
  },
  barTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  hiddenContent: {
    backgroundColor: "#90CAF9",
    padding: 15,
    borderRadius: 10,
    width: 400,
    marginBottom: 10,
  },
});