import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation()

  return (
    <View style = {{display: "flex", justifyContent: "center", flexDirection: "row"}} >
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailScreen", pokemon)}
      >
        <View className="flex-1">
          <FlatList
            data={pokemon}
            renderItem={({ item }) => (
              <View >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 100, height: 100,}}
                />

                <Text>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            numColumns={1}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};