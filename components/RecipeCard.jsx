import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS } from "../constants/colors";
import { recipeCardStyles } from "../assets/styles/home.styles";

export default function RecipeCard({ recipe }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={recipeCardStyles.container}
      onPress={() => router.push(`/recipe/${recipe.id}`)}
      activeOpacity={0.8}
    >
      <View style={recipeCardStyles.imageContainer}>
        <Image
          source={{ uri: recipe.image }}
          style={recipeCardStyles.image}
          contentFit="cover"
          transition={300}
        />
      </View>

      <View style={recipeCardStyles.content}>
        <Text style={recipeCardStyles.title} numberOfLines={2}>
          {recipe.title}
        </Text>
        {recipe.description && (
          <Text style={recipeCardStyles.description} numberOfLines={2}>
            {recipe.description}
          </Text>
        )}

        <View style={recipeCardStyles.footer}>
          {recipe.cookTime && (
            <View style={recipeCardStyles.timeContainer}>
              <Ionicons name="time-outline" size={14} color={COLORS.textLight} />
              <Text style={recipeCardStyles.timeText}>{recipe.cookTime}</Text>
            </View>
          )}
          {recipe.servings && (
            <View style={recipeCardStyles.servingsContainer}>
              <Ionicons name="people-outline" size={14} color={COLORS.textLight} />
              <Text style={recipeCardStyles.servingsText}>{recipe.servings}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}