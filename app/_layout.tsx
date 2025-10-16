import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1">
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="(auth)" />
                    <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
