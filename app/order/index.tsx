import { useRouter } from 'expo-router';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

const Order = () => {
    const router = useRouter();

    const [count, setCount] = React.useState<number>(123);

    React.useEffect(() => {}, []);

    //跳转订单详情页
    const toggleOrderItem = () => {
        console.log('aaa');
        router.push({
            pathname: `/order/[id]`,
            params: {
                id: count,
            },
        });
    };

    return (
        <View className="flex justify-center items-center gap-4 space-x-4">
            <Text>订单</Text>
            <Button title="订单详情" onPress={toggleOrderItem} />
        </View>
    );
};

export default Order;
