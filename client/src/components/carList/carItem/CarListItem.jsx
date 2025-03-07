import { Link } from "react-router-dom";
// import { useContext } from 'react';

export default function carListItem({
    _id,
    name,
    plate,
    imageUrl,
    owner,
    engine
}
// ,{
//     username,
//     isAuthenticated,  
// }


) {
    return (
        <div className="allAssistants">
            <div className="allAssistants-info">
                <img src={imageUrl} />
                
                <h2 style={{ color: '#9b4e00', fontSize: 30, padding: 0}}>{name}</h2>  
                <p></p>              
                <h3 style={{ color: 'black', fontSize: 10, padding: 0}}>PLATE: </h3>
                <h4 style={{ color: 'darkblue', fontSize: 16, padding: 0}}>{plate}</h4>
                <p></p>
                <h3 style={{ color: 'black', fontSize: 10, padding: 0}}>OWNER: </h3>
                <h3 style={{ color: 'black', fontSize: 10, padding: 0}}>OWNER MY: </h3>
                <h5 style={{ color: 'darkblue', fontSize: 16, padding: 0}}>{owner}</h5>
                <h3 style={{ color: 'black', fontSize: 10, padding: 0}}>ENGINE TYPE: </h3>
                <h6 style={{ color: 'darkblue', fontSize: 16, padding: 0}}>{engine}</h6>
              
                <p></p>
                <p></p>
                {/* <h4>Distance: {distance}</h4>
                
                <h5>Initial date: {dateInit}</h5>               
                <div>
                    <p>{description}</p>
                </div> */}
                
                <Link to={`/cars/${_id}`} className="details-button">Car Assistance</Link>
                <p></p>
                {/* <Link to={`/cars/${username}`} className="details-button">Car Info</Link> */}
            </div>
        </div>
    );
}
