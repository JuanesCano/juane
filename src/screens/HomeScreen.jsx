import { Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

export const getPokemons = useCallback(async () => {
  try {
    const { data } = await axios.get("/pokemon?limit=40");

    const pokemonData = data.results.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        image: response.data.sprites.front_default,
        abilities: response.data.abilites.ability
      };
    });

    const resolvedPokemonData = await Promise.all(pokemonData);

    setPokemons(resolvedPokemonData);
    // console.log(resolvedPokemonData)
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    console.log("Error en getPokemons", error.message);
    console.log("Error en getPokemons", error.response);
  }
}, []);

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Text>Cargando...</Text>
      ) : (
        <View className = "w-100">
          <PokemonCard pokemon={pokemons} />
        </View>
      )}
    </View>
  );
}
