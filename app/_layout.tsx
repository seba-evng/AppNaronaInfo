import { Tabs } from "expo-router";
import { Users, Box, Workflow, FileText } from "lucide-react-native";
import React from "react";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#818cf8",
        tabBarInactiveTintColor: "rgba(255,255,255,0.35)",
        tabBarStyle: {
          backgroundColor: "#12121e",
          borderTopColor: "rgba(255,255,255,0.06)",
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Box color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="collaborators"
        options={{
          title: "Colaboradores",
          tabBarIcon: ({ color, size }) => (
            <Users color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="components"
        options={{
          title: "Componentes",
          tabBarIcon: ({ color, size }) => (
            <Box color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="how-it-works"
        options={{
          title: "Funcionamiento",
          tabBarIcon: ({ color, size }) => (
            <Workflow color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="survey"
        options={{
          title: "Encuesta",
          tabBarIcon: ({ color, size }) => (
            <FileText color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}