//import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    
        // const {
        //     username,
        //     isAuthenticated,
            
        // } = useContext(AuthContext);
    
    
    
    return (
        <section id="homepage">
           
            <section id="welcome-world">

                <div className="welcome-message">
                    <div className="slogan">
                    {/* <Link to={`assistants}`} className="assistants-button">Your Cars</Link> */}
                    
                    <Link to= '/cars' className="assistants-button">Your Cars</Link>
                        <h2>Welcome in your car assistant!</h2>
                        { 
                        
                        <h2 style={{ color: 'darkgoldenrod', fontSize: 22}}>Hello! 
                            Welcome to a world of the best car maintanance assistant. </h2>
                            // Explore our selection of hotels and create post with your own!
                        }                        
                    </div>
                </div>
                    {/* <img src="../images/Picture_1.png" alt="hotel" />
                    <img src="../images/Picture_1.png" alt="hotel" />
                    <img src="../images/Picture_1.png" alt="hotel" /> */}
                <div>
                <div id="home-img">
                    <img src="../images/CarSevice_2.png" alt="hotel" />
                </div>
                
            </div>

            </section>

        </section>

    );
}
