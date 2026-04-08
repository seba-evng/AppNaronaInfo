import "../global.css";
import { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,ScrollView,Modal,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bot, Send, X } from "lucide-react-native";
import React from "react";

const OPENROUTER_API_KEY =
  process.env.EXPO_PUBLIC_OPENROUTER_API_KEY || "";

const sendToOpenRouter = async (prompt: string) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
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
              "Eres un asistente del proyecto NARONA. Explicas de forma clara sobre el robot, su funcionamiento y propósito. No das diagnósticos médicos ni reemplazas terapia profesional. Respondes de forma útil para niños, padres o jurado.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    }
  );

  const data = await response.json();
  return data?.choices?.[0]?.message?.content;
};

export default function Index() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: string; text: string }[]
  >([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const text = await sendToOpenRouter(input);

      setMessages((prev) => [
        ...prev,
        { role: "user", text: input },
        { role: "bot", text: text || "Sin respuesta" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error al conectar con la IA." },
      ]);
    }

    setInput("");
  };

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <View className="flex-1 p-5">

        {/* HEADER */}
        <View className="mb-5">
          <Text className="text-3xl font-bold text-purple-800">
            NARONA
          </Text>
          <Text className="text-gray-600 mt-1">
            Asistente neuromotional para niños con TEA
          </Text>
        </View>

        {/* INFO */}
        <View className="bg-white rounded-2xl p-4 border border-purple-100 shadow-md">
          <Text className="text-gray-700 leading-5">
            NARONA es un robot autónomo diseñado para apoyar el aprendizaje
            mediante juegos interactivos y acompañamiento conversacional basado
            en inteligencia artificial.
          </Text>
        </View>

        {/* BOTÓN PARA ABRIR MODAL */}
        <TouchableOpacity
          onPress={() => setOpen(true)}
          className="absolute bottom-6 right-6 bg-purple-500 p-4 rounded-full shadow-lg"
        >
          <Bot size={24} color="white" />
        </TouchableOpacity>

        {/* MODAL */}
        <Modal visible={open} animationType="slide" transparent>
          <View className="flex-1 bg-black/50 justify-end">

            <View className="h-[85%] bg-white rounded-t-3xl p-4">

              {/* HEADER MODAL */}
              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-lg font-bold text-purple-700">
                  Asistente NARONA
                </Text>

                <TouchableOpacity onPress={() => setOpen(false)}>
                  <X size={22} color="black" />
                </TouchableOpacity>
              </View>

              {/* CHAT */}
              <ScrollView className="flex-1 mb-3">
                {messages.map((msg, index) => (
                  <View
                    key={index}
                    className={`mb-2 px-3 py-2 rounded-xl max-w-[80%] ${
                      msg.role === "user"
                        ? "bg-purple-500 self-end"
                        : "bg-gray-200 self-start"
                    }`}
                  >
                    <Text
                      className={
                        msg.role === "user" ? "text-white" : "text-black"
                      }
                    >
                      {msg.text}
                    </Text>
                  </View>
                ))}
              </ScrollView>

              {/* INPUT */}
              <View className="flex-row items-center border border-gray-200 rounded-xl p-2 bg-gray-50">
                <TextInput
                  value={input}
                  onChangeText={setInput}
                  placeholder="Escribe sobre NARONA..."
                  className="flex-1 px-2"
                />
                <TouchableOpacity
                  onPress={sendMessage}
                  className="bg-purple-500 p-2 rounded-lg ml-2"
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