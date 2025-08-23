import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export default function LoadingSpinner({ message = "Loading...", size = "large" }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator size={size} color={COLORS.primary} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: COLORS.background,
  },
  content: {
    alignItems: "center",
    gap: 16,
  },
  message: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: "center",
  },
});