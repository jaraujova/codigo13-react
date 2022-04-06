import { Link, Outlet } from "react-router-dom";
import "../../services/index"

const Main = () => {

    return(
        <div>
        <header>
        <nav className="main">
            <div>
                <img className="main_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbrg1faBTn3L836D3Kybz_1o7BzwvP87-_g&usqp=CAU" alt=""/>
            </div>

            <div id="lista">
                <ul className="ul-nav">
                    <li className="li-nav">
                       <Link to="/">Pokemon </Link> 
                        </li>
                    <li className="li-nav">
                       <Link to="/flags">Banderas </Link> 
                        </li>
                    <li className="li-nav">
                       <Link to="/youtube">Youtube </Link> 
                        </li>
                        <li className="li-nav">
                       <Link to="/login">Login</Link> 
                        </li>
                        <li className="li-nav">
                       <Link to="/map">Maps</Link> 
                        </li>
                </ul>
            </div>
        </nav>
        <Outlet/>
        </header>
        </div>

    )
}

export default Main;