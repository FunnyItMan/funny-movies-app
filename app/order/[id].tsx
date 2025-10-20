import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderItem() {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Text>{id}</Text>
        </SafeAreaView>
    );
}
