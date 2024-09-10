//import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';

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
                        <h2>Welcome in your car assistant!</h2>
                        { 
                        
                        <h2 style={{ color: 'red', fontSize: 22}}>Hello! 
                            Welcome to a world of the best car maintanance assistant. </h2>
                            // Explore our selection of hotels and create post with your own!
                        }                        
                    </div>
                </div>
                <img src="../images/hotel_3.png" alt="hotel" />
            <div>
                {/* <div id="home-img">
                    <img src="../images/Hotel_1.png" alt="hotel" />
                </div> */}
                
            </div>

            </section>

        </section>

    );
}
