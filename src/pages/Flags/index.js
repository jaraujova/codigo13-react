import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { getDataFromPokemon } from "../../services";
import { Link } from "react-router-dom";
import FlagsDetail from "../FlagsDeteil";


const Flags = () => {
  const [countries, setCountries] = useState([]);

  const [region, setRegion] = useState("");

  const fetchCountries = async () => {
    const response = await getDataFromPokemon(
      "https://restcountries.com/v3.1/all"
    );
    setCountries(response);
  };

  const handleRegion = async (e) => {
    setRegion(e.target.value);
    // vamos a evaluar si el valor es igual a all entonces ejecutsa la funcion
    // fetchCountries
    if (e.target.value === "all") {
      fetchCountries();
      return;
    }

    // primero debemos limpiar para poder llenarlo con la nueva informacion
    setCountries([]);
    const response = await getDataFromPokemon(
      `https://restcountries.com/v3.1/region/${e.target.value}`
    );
    setCountries(response);
  };

  const handelSearchCountry = (e) => {
      const countryName = e.target.value;

      if (countryName.length === 0){
        fetchCountries();
        }

      if (countryName.length > 3){
          const filterCountries = countries.filter((country) => 
            country.name.common.toUpperCase().includes(countryName.toUpperCase())
          )
          setCountries(filterCountries)
      }

      }


  useEffect(() => {
    fetchCountries();
  }, []);


  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6}>
          <TextField onChange={handelSearchCountry} label="Search for a country..." fullWidth/>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel>Filter by Region</InputLabel>
            <Select
              label="Filter by Region"
              value={region}
              onChange={handleRegion}
            >
              <MenuItem value="all">Todas las regiones</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {countries.length > 0 ?
          countries.map((country) => (
            <Grid item md={3} xs={12}>
              <Card>
                <a>
                <CardMedia
                  component="img"
                  height={200}
                  image={country.flags.svg}
                />
                </a>
                <CardContent>
                  <h4>name: {country.name.common}</h4>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </CardContent>
              </Card>
            </Grid>
          )): (
              <div className="center loading">
                <CircularProgress />
              </div>
            
        )} 
      </Grid>
    </Container>
  );
};

export default Flags;