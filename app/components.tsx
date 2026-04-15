import {
  BatteryFull,
  ChevronDown,
  CircuitBoard,
  Cog,
  CpuIcon,
  Gauge,
  Monitor,
  Thermometer,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface ComponentCardProps {
  icon: React.ReactNode;
  accentColor: string;
  title: string;
  description: string;
  imageSource: ImageSourcePropType;
  // "cover" para fotos, "contain" para imágenes con fondo blanco/transparente
  imageMode?: "cover" | "contain";
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function ComponentCard({
  icon,
  accentColor,
  title,
  description,
  imageSource,
  imageMode = "cover",
}: ComponentCardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  };

  return (
    <TouchableOpacity
      onPress={toggle}
      activeOpacity={0.8}
      className="mb-4 rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#12121e", borderWidth: 1, borderColor: "#ffffff0f" }}
    >
      {/* Barra de acento lateral */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 3, backgroundColor: accentColor }} />

        <View style={{ flex: 1 }}>
          {/* Header */}
          <View className="flex-row items-center justify-between px-4 pt-4 pb-2">
            <View className="flex-row items-center gap-2 flex-1">
              <View
                style={{
                  backgroundColor: accentColor + "1A",
                  borderRadius: 8,
                  padding: 6,
                }}
              >
                {icon}
              </View>
              <Text className="text-white text-sm font-semibold">{title}</Text>
            </View>
            <View
              style={{
                backgroundColor: expanded ? accentColor + "22" : "#ffffff0a",
                borderRadius: 20,
                padding: 4,
              }}
            >
              <ChevronDown
                color={expanded ? accentColor : "#ffffff40"}
                size={15}
                style={{ transform: [{ rotate: expanded ? "180deg" : "0deg" }] }}
              />
            </View>
          </View>

          {/* Description */}
          <Text className="text-white/50 text-xs leading-5 px-4 pb-4">
            {description}
          </Text>
        </View>
      </View>

      {/* Imagen desplegable */}
      {expanded && (
        <View style={{ borderTopWidth: 1, borderTopColor: "#ffffff08" }}>
          <Image
            source={imageSource}
            style={{ width: "100%", height: 200 }}
            resizeMode={imageMode}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

// ─── Datos ────────────────────────────────────────────────────────────────────
const COMPONENTS: ComponentCardProps[] = [
  {
    icon: <CpuIcon color="#818cf8" size={16} />,
    accentColor: "#818cf8",
    title: "Raspberry Pi 5",
    description:
      "Cerebro principal del robot. Gestiona el procesamiento de datos, la lógica de comportamiento, la comunicación con la app móvil y la ejecución de los modelos de inteligencia artificial.",
    imageSource: require("../assets/images/Components/Rpb5.jpg"),
    imageMode: "contain",
  },
  {
    icon: <CircuitBoard color="#22d3ee" size={16} />,
    accentColor: "#22d3ee",
    title: "Raspberry Pi Zero",
    description:
      "Unidad secundaria encargada del control de bajo nivel. Coordina los servomotores y sensores periféricos, aliviando la carga del procesador principal.",
    imageSource: require("../assets/images/Components/RpbPiZero.jpg"),
    imageMode: "contain",
  },
  {
    icon: <BatteryFull color="#4ade80" size={16} />,
    accentColor: "#4ade80",
    title: "Batería 9500 mAh",
    description:
      "Fuente de alimentación portátil que garantiza autonomía durante las sesiones de acompañamiento, sin necesidad de conexión constante a la red eléctrica.",
    imageSource: require("../assets/images/Components/Bateria9500.jpg"),
    imageMode: "cover",
  },
  {
    icon: <Monitor color="#facc15" size={16} />,
    accentColor: "#facc15",
    title: "Pantalla táctil",
    description:
      "Interfaz visual integrada en el robot que permite mostrar expresiones, animaciones y contenido interactivo directamente al niño durante la sesión.",
    imageSource: require("../assets/images/Components/Pantalla.jpg"),
    imageMode: "contain",
  },
  {
    icon: <Thermometer color="#fb7185" size={16} />,
    accentColor: "#fb7185",
    title: "Sensor MLX90614",
    description:
      "Sensor infrarrojo de temperatura sin contacto. Permite medir la temperatura corporal del niño de forma no invasiva, aportando datos de contexto durante la interacción.",
    imageSource: require("../assets/images/Components/SensorMlx.jpg"),
    imageMode: "contain",
  },
  {
    icon: <Cog color="#c084fc" size={16} />,
    accentColor: "#c084fc",
    title: "Servomotores MG996",
    description:
      "Motores de alta precisión que dan movimiento a las extremidades del robot. Permiten gestos y expresiones físicas que refuerzan la comunicación no verbal con el niño.",
    imageSource: require("../assets/images/Components/ServoMotor.jpeg"),
    imageMode: "contain",
  },
  {
    icon: <Gauge color="#22d3ee" size={16} />,
    accentColor: "#22d3ee",
    title: "Ruedas Oruga con Motores DC",
    description:
      "Sistema de tracción del robot basado en orugas con motores DC. Permite desplazamiento estable sobre distintas superficies, asegurando movilidad fluida durante las sesiones.",
    imageSource: require("../assets/images/Components/Ruedas.jpeg"),
    imageMode: "contain",
  },
];

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function ComponentsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0F]">
      <ScrollView
        className="flex-1 bg-[#0A0A0F] px-5 pt-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-6">
          <View className="flex-row items-center gap-2 mb-1">
            <View
              style={{
                width: 4,
                height: 22,
                borderRadius: 2,
                backgroundColor: "#818cf8",
              }}
            />
            <Text className="text-white text-2xl font-semibold">
              Componentes
            </Text>
          </View>
          <Text className="text-white/40 text-xs leading-5 ml-6">
            Pulsa cada tarjeta para ver la imagen del componente.{"\n"}
            Hardware del robot de acompañamiento NARONA.
          </Text>
        </View>

        {/* Cards */}
        {COMPONENTS.map((c) => (
          <ComponentCard key={c.title} {...c} />
        ))}

        <Text className="text-center text-white/20 text-xs mb-6">
          Proyecto académico · Informática · UETS
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}