import { useContext, useState, } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { Button, Grid, Card, TextField, CardContent } from "@mui/material";
import bgLogin from "../../assets/bg-login.png";
import swal from "sweetalert";

const Login = () => {
    const {storeUser} = useContext(UserContext);

    const [userData, setUserData] = useState ({
        email: "",
        password:"",
    })


    const handleChangeInput = (e) => {
        const {value, name} = e.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    }

    const handleClicLogin = () => {
        if (userData.email === "pepe@gmail.com" && userData.password === "123456") {
            const user = {
              nombre: "Pepe",
              apellido: "Zapata",
              correo: userData.email,
              edad: 21,
              trabajo: "Software Developer",
              dni: "12345678",
              cel: "999999",
            };
            storeUser(user);

            window.location.href= "/youtube/administrador"
          } else {
            swal({
              icon: "error",
              title: "Error",
              text: "Email or Password incorrect",
            });
          }
    }

    return (
        <Grid
            container
            alignItems="center"
            sx={{ height: "100vh", padding:5, backgroundColor: "#3b3b3c" }}
        >
            <Grid item md={6}>
                <img src={bgLogin} width={600} alt="" />
            </Grid>
            <Grid item md={6}>
                <Card sx={{width: "500px"}}>
                    <CardContent >
                        <h5>Welcome to</h5>
                        <h3>Tecsup - Codigo</h3>
                        <p>Bienvenido a la comunidad de Codigo</p>
                        <Grid container spacing={3} mt={5}>
                            <Grid item md={12}>
                                <TextField label="Email"  name="email" onChange={handleChangeInput} fullWidth />
                            </Grid>
                            <Grid item md={12}>
                                <TextField type="password" label="Password" name="password"  onChange={handleChangeInput} fullWidth />
                            </Grid>
                            <Grid item md={12}>
                                <Button sx={{ backgroundColor: "#000" }}
                                variant="contained"
                                fullWidth
                                size="large" onClick={handleClicLogin}>
                                    Iniciar session
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Login;
