import { GetServerSideProps } from "next";


async function getPokemon() {
    const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/1';
    const pokemonResponse = await fetch(pokemonURL);
}