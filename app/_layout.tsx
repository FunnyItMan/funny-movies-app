import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                    headerBackButtonDisplayMode: 'minimal',
                }}
            >
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="order/index" options={{ headerShown: true, title: '订单' }} />
                <Stack.Screen name="order/[id]" options={{ headerShown: true, title: '详情' }} />
                <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
            </Stack>
        </SafeAreaProvider>
    );
}
