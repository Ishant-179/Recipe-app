import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import SafeScreen from "@/components/SafeScreen";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}