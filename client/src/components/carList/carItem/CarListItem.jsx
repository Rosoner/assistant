import { Link } from "react-router-dom";
import { useContext } from 'react';

export default function carListItem({
    _idc,
    car,
    plate,
    distance,
    imageUrl,
    description,
    dateInit,
    location,
    owner

},
{
    username,
    isAuthenticated,  
}


) {
    return (
        <div className="allAssistants">
            <div className="allAssistants-info">
                <img src={imageUrl} />
                <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mazda-6-my19-index-1.png" alt="logo"/>
                <h2 style={{ color: '#9b4e00', fontSize: 30, padding: 0}}>{car}</h2>  
                <p></p>              
                <h3 style={{ color: 'black', fontSize: 10, padding: 0}}>PLATE: </h3>
                <h4 style={{ color: 'darkblue', fontSize: 16, padding: 0}}>{plate}</h4>
                <p></p>
                <h3 style={{ color: 'black', fontSize: 10, padding: 0}}>OWNER: </h3>
                <h5 style={{ color: 'darkblue', fontSize: 16, padding: 0}}>{owner}</h5>
                <p></p>
                <p></p>
                {/* <h4>Distance: {distance}</h4>
                
                <h5>Initial date: {dateInit}</h5>               
                <div>
                    <p>{description}</p>
                </div> */}
                <Link to={`/cars/${_idc}`} className="details-button">Car Assistance</Link>
                <p></p>
                <Link to={`/assistants/${username}`} className="details-button">Car Info</Link>
            </div>
        </div>
    );
}
