import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 32,
    gap: 20,
  },

  forecastCard: {
    minHeight: 200,
    borderRadius: 28,
    borderCurve: "continuous",
    padding: 24,
  },

  sectionTitle: {
    color: "white",
  },

  days: {
    fontSize: 18,
    color: "white",
  },
});
