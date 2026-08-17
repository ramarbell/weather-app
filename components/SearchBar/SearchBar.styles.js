import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchInput: {
    minHeight: 52,
    borderRadius: 16,
    borderCurve: "continuous",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: "#13243B",
    fontSize: 16,
    paddingHorizontal: 18,
    boxShadow: "0 8px 24px rgba(4, 16, 32, 0.22)",
    marginBottom: 20,
  },

  searchBox: {
    padding: 10,
    margin: 10,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },

  searchBoxDisabled: {
    opacity: 0.45,
  },

  recentSearchesBox: {
    padding: 12,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 16,
    backgroundColor: "white",
    borderColor: "white",
    gap: 10,
  },

  recentTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#13243B",
  },

  recentSearchesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  recentSearchChip: {
    backgroundColor: "#EAF4FF",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  recentSearchText: {
    fontSize: 14,
    color: "#13243B",
  },
});
