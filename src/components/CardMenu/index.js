import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';


export default function CardMenu() {
  const navigation = useNavigation();
  return (
    <View className=" justify-around">
      <View className="flex-row justify-around">
        <View className="flex-row py-2 px-4 bg-[#012030] w-40 items-center rounded-xl ">
          <View className="bg-white p-2 rounded-full">
            <Icon name='book-open' color={'#45c4b0'} size={20} />
          </View>
          <Text className="text-white ml-2">Materi</Text>
        </View>
        <TouchableOpacity className="flex-row py-2 px-4 bg-white w-40 items-center rounded-xl border border-gray-400 " onPress={() => navigation.navigate('VideoAnimasi')}>
          <View className="bg-[#EE8DA9] p-2 rounded-full">
            <Icon name='book-open' color={'white'} size={20} />
          </View>
          <Text className="text-[#012030] ml-2">Video</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-around mt-4">
        <View className="flex-row py-2 px-4 bg-white w-40 items-center rounded-xl border border-gray-400 ">
          <View className="bg-[#EE8DA9] p-2 rounded-full">
            <Icon name='book-open' color={'white'} size={20} />
          </View>
          <Text className="text-[#012030] ml-2">Quiz</Text>
        </View>
        <View className="flex-row py-2 px-4 bg-white w-40 items-center rounded-xl border border-gray-400 ">
          <View className="bg-[#EE8DA9] p-2 rounded-full">
            <Icon name='book-open' color={'white'} size={20} />
          </View>
          <Text className="text-[#012030] ml-2">Live Chat</Text>
        </View>
      </View>
    </View>
  )
}

