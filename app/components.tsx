import {
  BatteryFull,
  ChevronDown,
  CircuitBoard,
  Cog,
  CpuIcon,
  Monitor,
  Thermometer,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Habilitar animaciones en Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ─── Card component ───────────────────────────────────────────────────────────
interface ComponentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  // Usa require("../../assets/images/rpi5.jpg") para imágenes locales
  // o una string con la URL para imágenes remotas
  imageUri: string | number;
}

function ComponentCard({ icon, title, description, imageUri }: ComponentCardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  };

  return (
    <TouchableOpacity
      onPress={toggle}
      activeOpacity={0.85}
      className="bg-[#12121e] rounded-2xl mb-4 border border-white/[0.06] overflow-hidden"
    >
      {/* Header row */}
      <View className="flex-row items-center justify-between p-4 pb-2">
        <View className="flex-row items-center gap-2 flex-1">
          {icon}
          <Text className="text-white text-sm font-medium">{title}</Text>
        </View>
        <ChevronDown
          color="#ffffff40"
          size={16}
          style={{
            transform: [{ rotate: expanded ? "180deg" : "0deg" }],
          }}
        />
      </View>

      {/* Description */}
      <View className="px-4 pb-4">
        <Text className="text-white/60 text-xs leading-5">{description}</Text>
      </View>

      {/* Imagen desplegable */}
      {expanded && (
        <Image
          source={typeof imageUri === "string" ? { uri: imageUri } : imageUri}
          className="w-full h-48"
          resizeMode="cover"
        />
      )}
    </TouchableOpacity>
  );
}

// ─── Datos ────────────────────────────────────────────────────────────────────
// Reemplaza imageUri con require("../../assets/images/nombre.jpg")
// para usar imágenes propias guardadas en tu proyecto.
const COMPONENTS: ComponentCardProps[] = [
  {
    icon: <CpuIcon color="#818cf8" size={18} />,
    title: "Raspberry Pi 5",
    description:
      "Cerebro principal del robot. Gestiona el procesamiento de datos, la lógica de comportamiento, la comunicación con la app móvil y la ejecución de los modelos de inteligencia artificial.",
    imageUri: require("../assets/images/Components/Rpb5.jpg"),
  },
  {
    icon: <CircuitBoard color="#22d3ee" size={18} />,
    title: "Raspberry Pi Zero",
    description:
      "Unidad secundaria encargada del control de bajo nivel. Coordina los servomotores y sensores periféricos, aliviando la carga del procesador principal.",
    imageUri: require("../assets/images/Components/RpbPiZero.jpg"),
  },
  {
    icon: <BatteryFull color="#4ade80" size={18} />,
    title: "Batería 9500 mAh",
    description:
      "Fuente de alimentación portátil que garantiza autonomía durante las sesiones de acompañamiento, sin necesidad de conexión constante a la red eléctrica.",
    imageUri: require("../assets/images/Components/Bateria9500.jpg"),
  },
  {
    icon: <Monitor color="#facc15" size={18} />,
    title: "Pantalla táctil",
    description:
      "Interfaz visual integrada en el robot que permite mostrar expresiones, animaciones y contenido interactivo directamente al niño durante la sesión.",
    imageUri: require("../assets/images/Components/Pantalla.jpg"),
  },
  {
    icon: <Thermometer color="#fb7185" size={18} />,
    title: "Sensor MLX90614",
    description:
      "Sensor infrarrojo de temperatura sin contacto. Permite medir la temperatura corporal del niño de forma no invasiva, aportando datos de contexto durante la interacción.",
    imageUri: require("../assets/images/Components/SensorMlx.jpg"),
  },
  {
    icon: <Cog color="#c084fc" size={18} />,
    title: "Servomotores MG996",
    description:
      "Motores de alta precisión que dan movimiento a las extremidades del robot. Permiten gestos y expresiones físicas que refuerzan la comunicación no verbal con el niño.",
    imageUri: require("../assets/images/Components/ServoMotor.jpeg"),
  },
];

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function ComponentsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0F]">
      <ScrollView className="flex-1 bg-[#0A0A0F] px-5 pt-6">
        <Text className="text-white text-2xl font-semibold mb-2">
          Componentes de NARONA
        </Text>
        <Text className="text-white/50 text-sm mb-6">
          Pulsa cada componente para ver su imagen. Hardware utilizado en la
          construcción física y electrónica del robot.
        </Text>

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