import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Developer from '../../pages/Developer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../pages/Home';
import React from 'react'

const Tab = createBottomTabNavigator();

export default function BottomBar() {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }} screenOptions={{ tabBarActiveTintColor: '#45c4b0', headerShown: false, tabBarShowLabel: false }} >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="home"
                        color={color}

                        size={27}
                    />
                ),
            }} />
            <Tab.Screen name="Developer" component={Developer} options={{
                tabBarLabel: 'Developer',
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="account-settings-outline"
                        color={color}

                        size={27}
                    />
                ),
            }} />



        </Tab.Navigator>
    );
}