import { View, Text } from 'react-native'
import React from 'react'
import Logo from "../../assets/img/logo.svg";
import CardMenu from '../../components/CardMenu';

export default function Home() {
    return (
        <View className="py-3 px-4 bg-white flex-1">
            <View className="flex-row items-center justify-center mt-5">
                <Logo width={125} height={50} />
            </View>
            <Text className="text-xs font-['Poppins-Light'] text-center mb-4">Belajar Videografi disini !</Text>
            <View className="mt-4">
                <CardMenu />
            </View>
        </View>
    )
}