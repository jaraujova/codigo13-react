import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, TextField, Button } from "@mui/material";
import { getMovieDetail, updateMovie } from "../../services/movies";


const MovieUpdate = () => {
    const { id } = useParams();
   
    const [values, setValues] = useState({
        name: "",
        director: "",
        gender: "",
        video_link: "",
        wallpaper: "",
        })
    
        const handleChangeInput = (e) => {
            const {value, name} = e.target;
            setValues({
                ...values,
                [name]: value,
            })
        }

  
    const fetchDetailMovie = async () => {
        const response = await getMovieDetail(id);
        setValues({
        name:response.name,
        director:response.director,
        gender:response.gender,
        video_link:response.video_link,
        wallpaper:response.wallpaper,
        })
    }

    const fetchUpdateMovie = async () => {
        await updateMovie(id, values);
    
        window.location.href = "/youtube/administrador";
      };
      

    useEffect (()=>{
        fetchDetailMovie()
    },[])


    return(
        <Container>
            <h4>Actualizar Pelicula</h4>
            <Grid container spacing={3}>
            
            <Grid item md={6}>
                <TextField value={values.name} label="Nombre de la pelicula" name="name" fullWidth onChange={handleChangeInput}/>
            </Grid>
            <Grid item md={6}>
                <TextField  value={values.director} label="Nombre del director" name="director" fullWidth onChange={handleChangeInput}/>
            </Grid>
            <Grid item md={6}>
                <TextField value={values.director} label="Genero" name="gender" fullWidth onChange={handleChangeInput}/>
            </Grid>
            <Grid item md={6}>
                <TextField value={values.video_link} label="Link de video" name="video_link" fullWidth onChange={handleChangeInput}/>
            </Grid>
            <Grid item md={6}>
                <TextField value={values.wallpaper} label="Link de la portada" name="wallpaper" fullWidth onChange={handleChangeInput}/>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" onClick={fetchUpdateMovie} >Actualizar</Button>
            </Grid>
        </Grid>
        </Container>      
        
    )
}

export default MovieUpdate;