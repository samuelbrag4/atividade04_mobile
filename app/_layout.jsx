import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1565C0",
        tabBarInactiveTintColor: "#ffff",
        tabBarStyle: {
          backgroundColor: "#90CAF9",
          borderTopWidth: 1,
          borderTopColor: "#90CAF9",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerTitle: "Página Inicial",
          headerStyle: {
            backgroundColor: "#90CAF9",
          },
          headerTintColor: "#ffff",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "",
          headerTitle: "Sobre nós",
          headerStyle: {
            backgroundColor: "#90CAF9",
          },
          headerTintColor: "#ffff",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlceo" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "",
          headerTitle: "Login",
          headerStyle: {
            backgroundColor: "#90CAF9",
          },
          headerTintColor: "#ffff",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="terms"
        options={{
          title: "",
          headerTitle: "Termos",
          headerStyle: {
            backgroundColor: "#90CAF9",
          },
          headerTintColor: "#ffff",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
