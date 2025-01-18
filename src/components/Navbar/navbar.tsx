import { NavLink, Link } from "react-router-dom"
import nav from "../../constants/index"
import "./navbar.css"
import { IoMdMenu } from "react-icons/io";

const navbar: React.FC = () => {
  return (
    
    <nav className="navbar">
        <div className="navbar-container">
                <h1 className="nav-head">Product <span className="head-span">Space</span></h1>
                 <IoMdMenu className="menu-icon"/>
                
                <ul className="menu-bar">
                    {nav.map((menu)=>(
                        <li key={menu.id}
                        >
                            <NavLink
                                className="li"
                                to={menu.path}
                            >
                                {menu.value}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                
        

            <div className="button">
                <Link
                    to="#"
                    className="login-button button-common  "
                >
                    Log In
                </Link>
                <Link
                    to="#"
                    className="sign-button button-common "           
                >
                    Sign Up 
                </Link>
            </div>              
        </div>
    </nav>
        
  )
}

export default navbar


