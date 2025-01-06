import React, { useState, useEffect } from 'react';
import Loader from './loader/Loader';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Função para simular o atraso e carregar os dados
    const fetchPokemon = () => {
      setTimeout(async () => {
        let endpoint = "https://pokeapi.co/api/v2/pokemon";
        setIsLoading(true); // Mostra o loader antes de fazer a requisição
        try {
          // Faz a requisição à API
          let res = await fetch(endpoint);

          // Converte a resposta em JSON
          let data = await res.json();

          // Cria um array temporário para armazenar os Pokémon
          let pokemons = [];
          for (let i = 0; i < data.results.length; i++) {
            pokemons.push({
              id: i,
              name: data.results[i].name,
            });
          }

          setPokemonList(pokemons); // Atualiza o estado com a lista de Pokémon
          setIsLoading(false); // Esconde o loader após a resposta da API
        } catch (error) {
          console.error('Erro ao obter Pokémon:', error); // Exibe um erro no console em caso de falha
          setIsLoading(false); // Esconde o loader mesmo em caso de erro
        }
      }, 2000); // Tempo para retornar o resultado da API
    };

    fetchPokemon();
  }, []); // O array vazio significa que o efeito será executado apenas uma vez

  return (
    <div>
      {isLoading ? ( // Condicional para exibir o loader ou a lista de Pokémon
        <Loader /> // Componente Loader
      ) : (
        <div>
          {pokemonList.map((pokemon) => ( // Mapeia a lista de Pokémon para elementos
            <p key={pokemon.id}>Pokemon {pokemon.id}: {pokemon.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App; // Exporta o componente App como padrão
