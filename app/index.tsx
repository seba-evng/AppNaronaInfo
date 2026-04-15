import "../global.css";
import { useState } from "react";
import {View, Text, TextInput, TouchableOpacity,ScrollView, Modal} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bot, Send, X } from "lucide-react-native";
import React from "react";

const OPENROUTER_API_KEY = process.env.EXPO_PUBLIC_OPENROUTER_API_KEY || "";

const sendToOpenRouter = async (prompt: string) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Eres un asistente del proyecto NARONA. Explicas de forma clara sobre el robot, su funcionamiento y propósito. No das diagnósticos médicos ni reemplazas terapia profesional, dilo en menos de 100 palabras. Respondes de forma útil para niños, padres o jurado. Los integrantes del proyecto son: Juan José Medina, Juan Sebastián Nivelo, María José Tapia y Joseph Brito, todos estudiantes de Informática de la UETS.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });
  const data = await response.json();
  return data?.choices?.[0]?.message?.content;
};

export default function Index() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "bot", text: "Hola! Soy el asistente de NARONA. En que te puedo ayudar hoy?" },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    try {
      const text = await sendToOpenRouter(input);
      setMessages((prev) => [
        ...prev,
        { role: "user", text: input },
        { role: "bot", text: text || "Sin respuesta" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error al conectar con la IA." },
      ]);
    }
    setInput("");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0F]">
      <View className="flex-1 px-5 pt-6">

        {/* HEADER */}
        <View className="mb-5">
          <Text className="text-white text-2xl font-semibold">
            NARONA
          </Text>
          <Text className="text-white/50 text-sm mt-1">
            Asistente neuromotional para niños con TEA
          </Text>
        </View>

        {/* INFO */}
        <View className="bg-[#12121e] rounded-2xl p-4 border border-white/[0.06]">
          <Text className="text-white/60 text-xs leading-5">
            NARONA es un robot autónomo diseñado para apoyar el aprendizaje
            mediante juegos interactivos y acompañamiento conversacional basado
            en inteligencia artificial.
          </Text>
        </View>

        {/* BOTÓN FLOTANTE */}
        <TouchableOpacity
          onPress={() => setOpen(true)}
          className="absolute bottom-6 right-6 bg-[#818cf8] p-4 rounded-full"
        >
          <Bot size={24} color="white" />
        </TouchableOpacity>

        {/* MODAL */}
        <Modal visible={open} animationType="slide" transparent>
          <View className="flex-1 bg-black/50 justify-end">
            <View className="h-[85%] bg-[#12121e] rounded-t-3xl p-4 border-t border-white/[0.06]">

              {/* HEADER MODAL */}
              <View className="flex-row justify-between items-center mb-3">
                <View className="flex-row items-center gap-2">
                  <Bot size={20} color="#818cf8" />
                  <Text className="text-lg font-semibold text-[#818cf8]">
                    Asistente NARONA
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setOpen(false)}>
                  <X size={22} color="rgba(255,255,255,0.5)" />
                </TouchableOpacity>
              </View>

              {/* CHAT */}
              <ScrollView className="flex-1 mb-3">
                {messages.map((msg, index) => (
                  <View
                    key={index}
                    className={`mb-2 px-3 py-2 rounded-xl max-w-[80%] ${
                      msg.role === "user"
                        ? "bg-[#818cf8] self-end"
                        : "bg-white/10 self-start"
                    }`}
                  >
                    <Text
                      className={
                        msg.role === "user"
                          ? "text-white text-xs"
                          : "text-white/70 text-xs"
                      }
                    >
                      {msg.text}
                    </Text>
                  </View>
                ))}
              </ScrollView>

              {/* INPUT */}
              <View className="flex-row items-center border border-white/10 rounded-xl p-2 bg-white/5">
                <TextInput
                  value={input}
                  onChangeText={setInput}
                  placeholder="Escribe sobre NARONA..."
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  className="flex-1 px-2 text-white"
                />
                <TouchableOpacity
                  onPress={sendMessage}
                  className="bg-[#818cf8] p-2 rounded-lg ml-2"
                >
                  <Send size={18} color="white" />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
}