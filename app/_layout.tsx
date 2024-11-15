import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
      options={{headerShown: false}}
      />
      <Stack.Screen name="results" 
      options={{headerShown: false}}
      />
      <Stack.Screen name="input"
      options={{headerShown: false}}
      />
      <Stack.Screen name="login"
      options={{headerShown: false}}
      />
      <Stack.Screen name="signup"
      options={{headerShown: false}}
      />
    </Stack>
  );
}
