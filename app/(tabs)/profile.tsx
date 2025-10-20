import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Text>Profile</Text>
            <Button title="订单" onPress={() => router.push('/order')} />
        </SafeAreaView>
    );
};

export default Profile;
