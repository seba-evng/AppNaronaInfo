import { ScrollView, Text, View } from "react-native";
import {Cpu,Bot,Gamepad2,Brain,Thermometer,Radar,Cog,} from "lucide-react-native";
import React from "react";

export default function TesisScreen() {
  return (
    <ScrollView className="flex-1 bg-[#0A0A0F] px-5 pt-6">
      {/* Título */}
      <Text className="text-white text-2xl font-semibold mb-2">
        Tesis: Robot Autónomo Educativo
      </Text>

      <Text className="text-white/50 text-sm mb-6">
        Proyecto enfocado en apoyo a niños con autismo grado II mediante
        interacción tecnológica.
      </Text>

      {/* Sección Robot */}
      <View className="bg-[#12121e] rounded-2xl p-4 mb-4 border border-white/[0.06]">
        <View className="flex-row items-center gap-2 mb-2">
          <Bot color="#818cf8" size={18} />
          <Text className="text-white text-sm font-medium">
            Robot Autónomo
          </Text>
        </View>

        <Text className="text-white/60 text-xs leading-5">
          El proyecto consiste en un robot autónomo diseñado para interactuar
          con niños con autismo de grado II, facilitando procesos de aprendizaje
          y estimulación mediante respuestas inteligentes.
        </Text>
      </View>

      {/* Hardware */}
      <View className="bg-[#12121e] rounded-2xl p-4 mb-4 border border-white/[0.06]">
        <View className="flex-row items-center gap-2 mb-2">
          <Cpu color="#22d3ee" size={18} />
          <Text className="text-white text-sm font-medium">Hardware</Text>
        </View>

        <Text className="text-white/60 text-xs leading-5">
          El sistema está construido sobre una Raspberry Pi 5, con estructura
          física realizada mediante impresión 3D. Incluye ruedas para movilidad
          autónoma y sensores para interacción con el entorno.
        </Text>
      </View>

      {/* Sensores */}
      <View className="bg-[#12121e] rounded-2xl p-4 mb-4 border border-white/[0.06]">
        <View className="flex-row items-center gap-2 mb-2">
          <Radar color="#4ade80" size={18} />
          <Text className="text-white text-sm font-medium">Sensores</Text>
        </View>

        <Text className="text-white/60 text-xs leading-5">
          Incorpora sensores ultrasónicos para detección de obstáculos y sensores
          de temperatura para monitoreo del entorno, permitiendo una interacción
          más segura y adaptativa.
        </Text>
      </View>

      {/* Software */}
      <View className="bg-[#12121e] rounded-2xl p-4 mb-4 border border-white/[0.06]">
        <View className="flex-row items-center gap-2 mb-2">
          <Cog color="#facc15" size={18} />
          <Text className="text-white text-sm font-medium">Programación</Text>
        </View>

        <Text className="text-white/60 text-xs leading-5">
          El robot está programado en Python, integrando lógica de control,
          procesamiento de datos de sensores y comportamiento autónomo.
        </Text>
      </View>

      {/* IA */}
      <View className="bg-[#12121e] rounded-2xl p-4 mb-4 border border-white/[0.06]">
        <View className="flex-row items-center gap-2 mb-2">
          <Brain color="#fb7185" size={18} />
          <Text className="text-white text-sm font-medium">
            Inteligencia Artificial
          </Text>
        </View>

        <Text className="text-white/60 text-xs leading-5">
          Se implementa inteligencia artificial para mejorar la interacción del
          robot, permitiendo respuestas adaptativas y comportamiento más natural
          frente a los estímulos del usuario.
        </Text>
      </View>

      {/* Juego */}
      <View className="bg-[#12121e] rounded-2xl p-4 mb-6 border border-white/[0.06]">
        <View className="flex-row items-center gap-2 mb-2">
          <Gamepad2 color="#c084fc" size={18} />
          <Text className="text-white text-sm font-medium">
            Juego Interactivo
          </Text>
        </View>

        <Text className="text-white/60 text-xs leading-5">
          Como complemento, se desarrolló un juego interactivo en Godot que
          permite reforzar la interacción del niño con el robot, integrando
          elementos visuales y dinámicos para mejorar la experiencia educativa.
        </Text>
      </View>

      {/* Footer */}
      <Text className="text-center text-white/20 text-xs mb-6">
        Proyecto académico · Informática
      </Text>
    </ScrollView>
  );
}