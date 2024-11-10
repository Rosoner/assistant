import { useNavigate, useParams } from 'react-router-dom';

import * as carService from '../../services/carService';

import { useEffect, useState } from 'react';

export default function CarEdit() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState({
        name: '',
        plate: '',        
        description: '',
        imageUrl: '',
        price: '',
        owner: '',
        engine: '',
        _id: '',
    });
    

    useEffect(() => {
        carService.getOne(carId)
        .then(result => {
            setCar(result);
            });
    }, [carId]);


    const editCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.edit(carId, carData);
           
            navigate('/cars');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

   
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editCarSubmitHandler}>
                <div className="container">
                    <h1>Edit car</h1>
                    <label htmlFor="name">Car:</label>
                    <input type="text" 
                        id="name" 
                        name="name" 
                        value={car.name} 
                        onChange={onChange} 
                        placeholder= "Enter car name...(required)" 
                        required/>

                    <label htmlFor="plate">Plate:</label>
                        <input type="text" 
                        id="plate" 
                        name="plate" 
                        value={car.plate} 
                        onChange={onChange} 
                        placeholder="Enter car plate...(required)" 
                        required/>

                    <label htmlFor="car-img">Image:</label>
                        <input type="text" 
                        id="imageUrl" 
                        name="imageUrl"
                        value={car.imageUrl} 
                        onChange={onChange} 
                        placeholder="Upload a photo..." />

                    <label htmlFor="price">Price:</label>
                        <textarea name="price" 
                        value={car.price} 
                        onChange={onChange} 
                        placeholder="Write some price..."
                        id="price"></textarea>

                    <label htmlFor="description">Description:</label>
                        <textarea name="description" 
                        value={car.description} 
                        onChange={onChange}
                        id="description"
                        placeholder="Write some description...(required)" 
                        required></textarea>

                    <label htmlFor="owner">Owner:</label>
                        <input type="text" 
                        id="owner" 
                        name="owner" 
                        value={car.owner} 
                        onChange={onChange} 
                        placeholder="Enter car owner" />

                    <label htmlFor="car-engine">Engine type:</label>
                        <input type="text" 
                        id="engine" name="engine" 
                        value={car.engine} 
                        onChange={onChange} 
                        placeholder="Enter official car's engine" />

                    <input className="btn submit" type="submit" value="Edit car" />
                </div>
            </form>
        </section>
    );
}
