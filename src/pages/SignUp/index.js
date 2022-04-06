
import { useState } from "react";
import { Container, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";


//yo
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// nombre
// apellido
// correo
// telefono
// contrasena
// direccion
// ciudad
// fecha de nacimiento
// DNI
// sexo

const SignUp = () => {
    const [dateSelect, setDateSelect] = useState(null);

    return (
        <Container maxWidth="lg">
            <form>
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <h2>Crear cuenta</h2>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Nombre" name="name" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Apellido" name="last_name" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Correo" name="email" type="email" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="Telefono"
                            name="phone_number"
                            type="number"
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Direccion" name="address" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Ciudad" name="city" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>

                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DatePicker
                                label="Fecha de nacimiento"
                                name="date_born"
                                
                                value={dateSelect}
                                onChange={(date) => {
                                    setDateSelect(date);
                                }}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label="DNI"
                            name="document_number"
                            type="number"
                            fullWidth
                        />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                            <Select label="Sexo"> 
                                <MenuItem value={10}>M</MenuItem>
                                <MenuItem value={20}>F</MenuItem>

                            </Select>

                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SignUp;