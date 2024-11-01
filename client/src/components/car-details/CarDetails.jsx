import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as carService from '../../services/carService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";

export default function CarDetails() {
    // const { email } = useContext(AuthContext);
    const {username} = useContext(AuthContext);
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

        setComments(state => [...state, { ...newComment, author: { username } }]);
    }

    return (
        <section id="car-details">
            <h1>Car Details</h1>
            <div className="info-section">
                <div className="car-header">

                    {/* <h2 style={{ color: '#9b4e00', fontSize: 30, padding: 0}}>{car}</h2>   */}
                    
                    <img className="car-img" src={car.imageUrl} alt={car.car} />
                    <h1>{car.car}</h1>
                    <span className="levels">Plate: {car.plate}</span>
                    <p className="type">{car.price}</p>
                    
                </div>

                <p className="text">Owner: {car.owner}</p>                
                <p className="type">Engine type: {car.engine}</p>
                <br></br>
           

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

                {/* <!-- Edit/Delete buttons ( Only for creator of this car )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
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
