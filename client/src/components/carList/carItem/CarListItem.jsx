import { Link } from "react-router-dom";


export default function carListItem({
    _idc,
    car,
    plate,
    distance,
    imageUrl,
    description,
    dateInit,
    location

}) {
    return (
        <div className="allAssistants">
            <div className="allAssistants-info">
                <img src={imageUrl} />
                <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mazda-6-my19-index-1.png" alt="logo"/>
                <h1>{car}</h1>                
                <h3>Car plate: {plate}</h3>
                <h4>Distance: {distance}</h4>
                <h6>Service location: {location}</h6> 
                <h5>Initial date: {dateInit}</h5>               
                <div>
                    <p>Owner Ivan Stefanov{description}</p>
                </div>
                <Link to={`/cars/${_idc}`} className="details-button">Car Info</Link>
            </div>
        </div>
    );
}
