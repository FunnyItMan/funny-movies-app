import { Tabs } from 'expo-router';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{ tabBarInactiveTintColor: '#A8A8A8', tabBarActiveTintColor: '#E63946' }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'search-sharp' : 'search-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'person-sharp' : 'person-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
