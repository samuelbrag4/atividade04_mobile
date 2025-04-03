import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
      icon: "water-outline", // Ícone relacionado a praias
    },
    {
      title: "Mergulho e Snorkel",
      content: `Fernando de Noronha é um dos melhores lugares do mundo para a prática de mergulho. Com uma fauna marinha rica e águas claras, você pode nadar ao lado de tartarugas, golfinhos, arraias e até tubarões. As opções de snorkel em locais como o Cacimba do Padre e a Baía do Sueste são imperdíveis!`,
      icon: "fish-outline", // Ícone relacionado a mergulho
    },
    {
      title: "Trilhas e Aventuras ao Ar Livre",
      content: `Trilha do Atalaia: Leva a uma piscina natural repleta de peixes coloridos.

Trilha do Morro do Pico: Desafiante, mas oferece uma das vistas mais incríveis do arquipélago.`,
      icon: "walk-outline", // Ícone relacionado a trilhas
    },
    {
      title: "Cultura Local e Gastronomia",
      content: `Além das belezas naturais, Fernando de Noronha também oferece uma rica cultura local. Explore a história da ilha no Museu do Tubarão ou saboreie pratos típicos no restaurante da ilha, que traz um delicioso mix da culinária nordestina com toques especiais dos frutos do mar fresquíssimos.`,
      icon: "restaurant-outline", // Ícone relacionado à gastronomia
    },
    {
      title: "Dicas Importantes para sua Visita",
      content: `Respeite a natureza: Fernando de Noronha é um parque nacional, e a preservação do meio ambiente é fundamental para garantir que as futuras gerações também possam desfrutar de sua beleza.

Prepare-se para o clima: O clima é tropical, com temperaturas agradáveis durante o ano inteiro, mas não se esqueça de levar protetor solar, chapéu e repelente.

Visita com responsabilidade: O número de visitantes é limitado, e a preservação do ecossistema da ilha depende do cuidado de todos. Não deixe lixo para trás e siga as orientações dos guias locais.`,
      icon: "information-circle-outline", // Ícone relacionado a dicas
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre nós</Text>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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