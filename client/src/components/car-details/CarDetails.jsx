import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";

import * as carService from '../../services/carService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";

export default function CarDetails() {
    // const { email } = useContext(AuthContext);
    const navigate = useNavigate();
    const {username, userId, isAuthenticated} = useContext(AuthContext);
    const [car, setCar] = useState({});
    const [comments, setComments] = useState([]);
    const { carId } = useParams();

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    let currentDate = `${day}-${month}-${year}`;

    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);

        commentService.getAll(carId)
            .then(setComments);
    }, [carId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            carId,
            formData.get('comment')
        );

        newComment.owner = { username };

        setComments(state => [...state, { ...newComment, author: { username } }]);
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete hotel: ${car.name}`);

        if (hasConfirmed) {
            await carService.remove(carId);

            navigate('/cars');
        }
    }

    return (
        <section id="car-details">
            <h1>Car Details</h1>
            <div className="info-section">
                <div className="car-header">

                    {/* <h2 style={{ color: '#9b4e00', fontSize: 30, padding: 0}}>{car}</h2>   */}
                    
                    <img className="car-img" src={car.imageUrl} alt={car.name} />
                    <h1>{car.name}</h1>
                    <span className="levels">Plate: {car.plate}</span>
                    <p className="type">{car.price}</p>
                    
                </div>

                <p className="text">Owner: {car.owner}</p>                
                <p className="type">Engine type: {car.engine}</p>
                <br></br>


           
                {userId === car._ownerId && isAuthenticated && (
                        <div className="buttons">
                            <Link to={`/cars/${carId}/edit`} className="button-edit" title="Click here to edit your post">Edit</Link>
                            <button className="button" title="Click here to delete your post" onClick={deleteButtonClickHandler}>Delete</button> 
                        </div>                                                
                    )} 
                    


                <div className="details-comments">

                    
                    <br></br>
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <li key={_id} className="comment">                               
                                <p>{username}: ({currentDate}) {text}</p>
                            </li>
                        ))}
                    </ul> 
                    

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                    <br></br>
                </div>

                
                <div className="buttons">
                <Link to={`/cars/${carId}/edit`} className="button-edit" title="Click here to edit your post">Edit</Link>
                <button className="button" title="Click here to delete your post" onClick={deleteButtonClickHandler}>Delete</button>
                </div>
                
            </div>
            

            <article className="create-comment">
                <label>Add new assitance:</label>
                <form className="form" onSubmit={addCommentHandler}>                
                    <textarea name="comment" placeholder="Add new assistance and current distance of your car..."></textarea>
                    <input className="btn submit" type="submit" value="Add assistance" />
                </form>
            </article>
        </section>
    );
}
