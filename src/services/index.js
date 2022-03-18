/**
 * Sera unuestro archiuvo donde almacenaremos las peticiones
 */

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=300";
//?limit=200



export const getDataFromPokemon = async (url = BASE_URL) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

// export const storePokemon = async () => {};