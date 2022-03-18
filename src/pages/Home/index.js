import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid} from "@mui/material";
import { getDataFromPokemon } from "../../services";
import PokemonDetail from "../../components/PokemonDetail";

const Home = () =>{
    // vamos a crear una variable la cual se encargue de guardar la lista de pokemosnes
    

    const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
    
    const [pokemons, setPokemon] = useState([])

    const fetchPokemonList = async () =>{
        const listaPokemones = await getDataFromPokemon();
        console.log(listaPokemones.results)
        setPokemon(listaPokemones.results);

    }

    useEffect(()=>{
        fetchPokemonList();
    },[]);

    return(
        <Container>
        <h1>Pokedex</h1>

        <Grid container spacing={3} >
            {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
                // aca el codigo visual
                <Grid item md={4} lg={4} sm={6} xs={12}>
                    <Card className="card-pokemon">
                    <CardMedia className="img-pokemon" component="img" image={`${imgUrl}${index + 1}.svg`} />
                    <CardContent className="center">
                        <h3 className="name-pokemon">{pokemon.name}</h3>
                        <PokemonDetail nombre={pokemon.name} url={pokemon.url} />
                    </CardContent>
                    </Card> 
                </Grid>
                
            ))}
        </Grid>
      </Container>

    )
}

export default Home;