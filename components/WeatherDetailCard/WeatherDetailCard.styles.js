import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  detailCard: {
    width: "48%",
    minHeight: 130,
    borderRadius: 20,
    borderCurve: "continuous",
    backgroundColor: "#F7FBFF",
    padding: 16,
    justifyContent: "space-between",
    boxShadow: "0 10px 24px rgba(4, 16, 32, 0.18)",
  },

  detailIcon: {
    color: "#3D8DCC",
    fontSize: 28,
  },

  detailLabel: {
    color: "#65758B",
    fontSize: 14,
    fontWeight: "700",
  },

  detailValue: {
    color: "#13243B",
    fontSize: 24,
    fontWeight: "800",
    fontVariant: ["tabular-nums"],
  },
});
