import { Link } from "react-router-dom";

export default function AssistantListItem({
    _id,
    car,
    plate,
    distance,
    location,
    imageUrl,
    price,
    description,
    type_service

}) {
    return (
        <div className="allAssistants">
            <div className="allAssistants-info">
                <img src={imageUrl} />
                <h1>{car}</h1>
                <h2 style={{ color: 'brown', fontSize: 22}}>Type service: {type_service}</h2>
                <h3>Car plate: {plate}</h3>
                <h4>Distance: {distance}</h4>
                <h6>Loacation: {location}</h6>                
                <div>
                    <p>{description} = {price}</p>
                </div>
                <Link to={`/assistants/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
