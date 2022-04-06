import { useContext } from "react";
import { Grid, TextField, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/logo.svg";
import "./index.css"
import { UserContext } from "../../Context/UserContext";
import { Outlet, Link } from "react-router-dom";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Ecomerce = () => {
    const { basket } = useContext(UserContext);
    return (
        <div>
            <nav className="nav-ecomerce">
                <Grid container alignItems="center"  ml={5} mr={5}>
                    <Grid item md={4}>
                        <img src={logo} alt="" />
                    </Grid>
                    <Grid className="busqueda" item md={4}>
                        {/* <TextField variant="outlined" sx={{width: 250}} label="Search for an item..." /> */}
                        <TextField variant="outlined" sx={{ width: 250 }} label="Lugar" />
                        <TextField
                        id="date"
                        label="Fecha"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="Fecha"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TravelExploreIcon/>



                    </Grid>

                    <Grid item md={4}>
                        <ul className="ul-ecomerce">
                            <li>
                                <a href="/">Store</a>
                            </li>
                            <li>
                                <a href="/">Account</a>
                            </li>
                            <li>
                                <a href="/">Wish List</a>
                            </li>
                            <li className="li-basket">
                                
                                <Link to="/ecommerce/basket">
                                    Basket&nbsp; <Badge badgeContent={basket ? basket.length : 0} color="primary">
                                    <ShoppingCartIcon />
                                    </Badge>
                                    </Link>
                            </li>
                        </ul>
                    </Grid>

                </Grid>
                <div className="container-tag">
                    <ul className="ul-tags">
                        <li>
                            <a href="/">
                                New Arrivas <span className="fresh">#Fresh</span>
                            </a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                        <li href="/">
                            <a>Categorias</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Ecomerce;

