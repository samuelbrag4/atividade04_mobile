import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function TermosDeUso() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introdução</Text>
        <Text style={styles.sectionText}>
          Bem-vindo ao nosso aplicativo. Ao utilizar o nosso aplicativo de
          viagem para Fernando de Noronha, você concorda com os termos e
          condições descritos neste documento. Caso não concorde, não utilize o
          aplicativo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Uso do Aplicativo</Text>
        <Text style={styles.sectionText}>
          O uso do aplicativo é exclusivo para fins pessoais e informativos.
          Você concorda em não utilizar o aplicativo para fins comerciais,
          ilegais ou prejudiciais a terceiros.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Objetivo do aplicativo</Text>
        <Text style={styles.sectionText}>
          O aplicativo tem como objetivo fornecer informações sobre Fernando de
          Noronha, como atrações turísticas, transporte, hospedagem,
          restaurantes e outras atividades para facilitar a sua experiência de
          viagem.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Conteúdo</Text>
        <Text style={styles.sectionText}>
          As informações disponibilizadas no aplicativo são atualizadas
          periodicamente, mas não garantimos a precisão ou a disponibilidade de
          todos os dados em tempo real. Recomendamos sempre confirmar detalhes
          diretamente com os fornecedores locais.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Alterações nos Termos</Text>
        <Text style={styles.sectionText}>
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
          momento, sem aviso prévio. Recomendamos que você reveja regularmente
          esta página para estar ciente de quaisquer alterações.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1565C0",
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
});
