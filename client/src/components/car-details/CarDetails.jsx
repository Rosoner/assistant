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
        <section id="game-details">
            <h1>Car Details</h1>
            <div className="info-section">
                <div className="game-header">

                    {/* <h2 style={{ color: '#9b4e00', fontSize: 30, padding: 0}}>{car}</h2>   */}
                    
                    <img className="game-img" src={car.imageUrl} alt={car.title} />
                    <h1>CAR{car.car}</h1>
                    <span className="levels">Plate: {car.plate}</span>
                    <p className="type">{car.price}</p>
                </div>

                <p className="text">Owner{car.owner}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new assitance:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Add more details......"></textarea>
                    <input className="btn submit" type="submit" value="Add assistance" />
                </form>
            </article>
        </section>
    );
}
