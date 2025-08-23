import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
  },
  clearButton: {
    padding: 4,
  },
  quickFilters: {
    marginTop: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 12,
  },
  filterButtons: {
    flexDirection: "row",
    gap: 12,
  },
  quickFilterButton: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeQuickFilter: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  quickFilterText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text,
  },
  activeQuickFilterText: {
    color: COLORS.white,
  },
  resultsSection: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    flex: 1,
  },
  resultsCount: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: "500",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recipesGrid: {
    gap: 16,
    paddingBottom: 32,
  },
  row: {
    justifyContent: "space-between",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: "center",
    lineHeight: 20,
  },
});
