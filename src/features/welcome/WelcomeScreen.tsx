import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Bot, Heart, MessageCircle, ShieldCheck } from "lucide-react-native";
import { colors } from "../../theme";

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: <Heart size={28} color={colors.primary} strokeWidth={2} />,
    title: "Apoyo emocional",
    description:
      "Acompañamiento empático en cada momento que lo necesites, sin juicios.",
  },
  {
    icon: <MessageCircle size={28} color={colors.secondary} strokeWidth={2} />,
    title: "Conversación natural",
    description:
      "Habla con NARONA de forma fluida, como si hablaras con un amigo de confianza.",
  },
  {
    icon: <ShieldCheck size={28} color={colors.success} strokeWidth={2} />,
    title: "Espacio seguro",
    description:
      "Tus conversaciones son privadas. Tu bienestar es nuestra prioridad.",
  },
];

type WelcomeScreenProps = {
  onGetStarted?: () => void;
};

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero section */}
        <View style={styles.heroSection}>
          <View style={styles.robotIconContainer}>
            <Bot size={64} color={colors.primary} strokeWidth={1.5} />
          </View>
          <Text style={styles.appName}>NARONA</Text>
          <Text style={styles.tagline}>Tu compañero emocional de confianza</Text>
          <Text style={styles.description}>
            Estamos aquí para escucharte, acompañarte y ayudarte a encontrar
            equilibrio en tu día a día. No estás solo/a.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresSection}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View style={styles.featureIconWrapper}>{feature.icon}</View>
              <View style={styles.featureTextWrapper}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={onGetStarted}
            activeOpacity={0.85}
          >
            <Heart
              size={20}
              color={colors.textOnPrimary}
              strokeWidth={2}
            />
            <Text style={styles.ctaButtonText}>Comenzar</Text>
          </TouchableOpacity>
          <Text style={styles.ctaCaption}>
            Disponible siempre que me necesites
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  // Hero
  heroSection: {
    alignItems: "center",
    paddingTop: 56,
    paddingBottom: 40,
  },
  robotIconContainer: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.accentBorder,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  appName: {
    fontSize: 40,
    fontWeight: "800",
    letterSpacing: 6,
    color: colors.primary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 17,
    fontWeight: "500",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.textSecondary,
    textAlign: "center",
    maxWidth: 320,
  },

  // Features
  featuresSection: {
    gap: 14,
    marginBottom: 40,
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 16,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  featureIconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  featureTextWrapper: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textSecondary,
  },

  // CTA
  ctaSection: {
    alignItems: "center",
    gap: 12,
  },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 40,
    width: "100%",
    gap: 10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  ctaButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textOnPrimary,
    letterSpacing: 0.5,
  },
  ctaCaption: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: "center",
  },
});
