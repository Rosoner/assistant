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
                <h2 style={{ color: '#9b4e00', fontSize: 30, padding: 0}}>{car}</h2>                
                <h3>PLATE: {plate}</h3>
                {/* <h4>Distance: {distance}</h4>
                
                <h5>Initial date: {dateInit}</h5>               
                <div>
                    <p>{description}</p>
                </div> */}
                <Link to={`/cars/${_idc}`} className="details-button">Car Info</Link>
            </div>
        </div>
    );
}
