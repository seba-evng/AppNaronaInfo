import React from "react";
import { ScrollView, Text, View, Image } from "react-native";

const colaboradores = [
  {
    id: 1,
    nombre: "Juan Sebastián Nivelo",
    alias: "@Nivi",
    foto: require("../assets/images/Us/Nivi.jpeg"),
    rol: "Robótica & IA",
    tagColor: "bg-indigo-500/20",
    tagText: "text-indigo-300",
    dotColor: "bg-indigo-400",
    initiales: "JN",
    avatarBg: "bg-indigo-950",
    avatarText: "text-indigo-300",
    tareas: [
      "Ensamblaje del circuito del robot",
      "Programación de la IA de movimiento del robot",
    ],
  },
  {
    id: 2,
    nombre: "Juan José Medina",
    alias: "@Juanjo",
    foto: require("../assets/images/Us/Juanjo.jpeg"),
    rol: "Robótica & Godot",
    tagColor: "bg-teal-500/20",
    tagText: "text-teal-300",
    dotColor: "bg-teal-400",
    initiales: "JM",
    avatarBg: "bg-teal-950",
    avatarText: "text-teal-300",
    tareas: [
      "Ensamblaje del circuito y programación de la IA de movimiento",
      "Primer diseñador del juego interactivo del robot",
      "Creación de la primera versión del juego en Godot",
    ],
  },
  {
    id: 3,
    nombre: "María José Tapia",
    alias: "@Majo",
    foto: require("../assets/images/Us/Majo.jpeg"),
    rol: "3D & UI Design",
    tagColor: "bg-red-500/20",
    tagText: "text-red-300",
    dotColor: "bg-red-400",
    initiales: "MT",
    avatarBg: "bg-red-950",
    avatarText: "text-red-300",
    tareas: [
      "Modelado 3D final del robot",
      "Diseñadora de la UI del juego final",
    ],
  },
  {
    id: 4,
    nombre: "Joseph Brito",
    alias: "@Joseph",
    foto: require("../assets/images/Us/Joseph.jpeg"),
    rol: "3D & Game Design",
    tagColor: "bg-amber-500/20",
    tagText: "text-amber-300",
    dotColor: "bg-amber-400",
    initiales: "JB",
    avatarBg: "bg-amber-950",
    avatarText: "text-amber-300",
    tareas: [
      "Creador del primer diseño 3D del robot",
      "Diseñador del juego final en Godot",
    ],
  },
];

export default function ColaboradoresScreen() {
  return (
    <ScrollView className="flex-1 bg-[#0A0A0F]">
      {/* Header */}
      <View className="px-5 pt-4 pb-5">
        <Text className="text-white text-2xl font-medium">Colaboradores</Text>
        <Text className="text-white/40 text-xs mt-1">
          Equipo detrás de Narona
        </Text>
        <View className="flex-row items-center gap-2 mt-3 self-start bg-indigo-500/10 border border-indigo-500/30 rounded-full px-3 py-1">
          <View className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <Text className="text-indigo-300 text-xs font-medium">
            3ro Bach. E1 · Informática
          </Text>
        </View>
      </View>

      {/* Cards */}
      <View className="px-4 pb-10 gap-3">
        {colaboradores.map((persona) => (
          <View
            key={persona.id}
            className="bg-[#12121e] rounded-2xl border border-white/[0.07] overflow-hidden"
          >
            {/* Top de la card */}
            <View className="flex-row items-center gap-3 px-4 pt-4 pb-3">
              {/* Avatar */}
              <View
                className={`w-14 h-14 rounded-2xl overflow-hidden ${persona.avatarBg}`}
              >
                <Image
                  source={persona.foto}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>

              {/* Info */}
              <View className="flex-1">
                <Text className="text-white text-sm font-medium">
                  {persona.nombre}
                </Text>
                <Text className="text-white/40 text-xs mt-0.5">
                  {persona.alias}
                </Text>
                <View
                  className={`self-start mt-1.5 px-2.5 py-0.5 rounded-full ${persona.tagColor}`}
                >
                  <Text className={`text-[10px] font-medium ${persona.tagText}`}>
                    {persona.rol}
                  </Text>
                </View>
              </View>
            </View>

            {/* Divider */}
            <View className="h-px bg-white/[0.06] mx-4" />

            {/* Tareas */}
            <View className="px-4 pt-3 pb-4 gap-2">
              {persona.tareas.map((tarea, index) => (
                <View key={index} className="flex-row items-start gap-2">
                  <View
                    className={`w-1.5 h-1.5 rounded-full mt-1.5 ${persona.dotColor}`}
                  />
                  <Text className="text-white/55 text-xs leading-5 flex-1">
                    {tarea}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Footer */}
        <Text className="text-center text-white/20 text-xs mt-2">
          Narona · 3ro Bach. E1 · Informática
        </Text>
      </View>
    </ScrollView>
  );
}