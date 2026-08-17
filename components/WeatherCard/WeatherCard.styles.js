import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  weatherCard: {
    minHeight: 260,
    borderRadius: 28,
    borderCurve: "continuous",
    padding: 24,
    justifyContent: "space-between",
    backgroundColor: "#3D8DCC",
    boxShadow: "0 18px 40px rgba(4, 16, 32, 0.32)",
    marginBottom: 15,
  },

  weatherCardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
  },

  cityName: {
    color: "#F7FBFF",
    fontSize: 30,
    fontWeight: "800",
  },

  condition: {
    color: "#D7ECFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
  },

  weatherIcon: {
    fontSize: 68,
    lineHeight: 78,
  },

  temperatureRow: {
    gap: 8,
  },

  temperature: {
    color: "#FFFFFF",
    fontSize: 88,
    fontWeight: "900",
    lineHeight: 96,
    fontVariant: ["tabular-nums"],
  },

  feelsLike: {
    alignSelf: "flex-start",
    overflow: "hidden",
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#F1F8FF",
    fontSize: 15,
    fontWeight: "700",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
});
