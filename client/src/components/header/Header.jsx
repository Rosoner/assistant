import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        username,
        isAuthenticated,
        
    } = useContext(AuthContext);

 

    return (
        <header>
            <div className="logo">
                {/* <img src="../images/hotel_small.png" alt="hero" 
                 /> */}
                 <Link className="home" to="/">
                    <img src="../images/car-repair.jpg" alt="logo"
                        title="Go to home page" />
                 </Link>
            </div>
            <h1><Link className="home" to="/">API IMS</Link></h1>
            <nav>
                <Link to="/assistants">Assistants</Link>
                <Link to="/cars">My Cars</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/assistants/create">NEW Service</Link>
                        <Link to="/logout">LOGOUT</Link>
                        {/* <span style={{ color: 'yellow',}}>| Logged in: {username} |</span> */}
                        <Link to="/myaccount"><span style={{ color: 'yellow',}}>| Info user: {username} |</span></Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">LOGIN</Link>
                        <Link to="/register">REGISTER</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

