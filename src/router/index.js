/**
 * Para poder crear nuestras debemos importar lo siguiente
 * BrowsRouter: Va a envolver todas las rutas que creemos
 * Routes: Es el child de BrowsRouter el cual nos va a permitir crear las rutas pon 
 * componente
 * Route: Es el encargado de recibir el paht y el element y renderizar el element 
 * el el path creado
 */
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "../pages/Home"
 import Flags from "../pages/Flags";
 import Youtube from "../pages/youtube";
 import YoutubeAdministrator from "../pages/YoutubeAdministrador";
 import MovieUpdate from "../pages/movieUpdate";
 import FlagsDetail from "../pages/FlagsDeteil";
//Layaut
import Main from "../layouts/Main";
//Import login
import Login from "../pages/login";
import Private from "../layouts/Private";
import Ecommerce from "../layouts/Ecomerce";
import PopularWeek from "../pages/PopularWeek";
import BasketView from "../pages/Basket";
import Map from "../pages/Map";
import SignUp from "../pages/SignUp";

 // Nuestro Router va a ser un componente el cual se encargue de retornar
 // las rutas con su respectiva vista
 const Router = () => {
   // como esto es un componente tenemos que usar return para poder crear las rutas
   return (
     <BrowserRouter>
     <Routes>
         <Route element={<Main/>}>
         <Route path="/login" element={<Login/>} />
         <Route path="signUp" element={<SignUp />} />
         <Route path="/map" element={<Map/>} /> 
         <Route path="/" element={<Home />} />
         <Route path="/flags" element={<Flags />} />
         <Route path="/flags/detail" element={<FlagsDetail />} />
         <Route path="/youtube" element={<Youtube />} />
       </Route>
       {/* Route de Ecomerce */}
       <Route element={<Ecommerce/>}>
         <Route path="ecommerce" element={<PopularWeek/>} />
         <Route path="/ecommerce/basket" element={<BasketView/>}/>
       </Route>

       <Route element={<Private />}>
       <Route path="/youtube/administrador" element={<YoutubeAdministrator/>}/>
         <Route path="/youtube/administrador/editar/:id" element={<MovieUpdate/>} />
       </Route>

       </Routes>
     </BrowserRouter>
   )
 }
 
 export default Router