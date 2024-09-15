import { useEffect, useState } from 'react';

import * as carService from '../../services/carService.js';

import CarListItem from './carItem/CarListItem.jsx';

// import { Link } from "react-router-dom";

import Spinner from "../../utils/Spinner.jsx";



export default function CarList() {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        carService.getAll()
            .then(result => setCars(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    // useEffect(() => {
    //     setIsLoading(true);

    //     carService.getOne()
    //         .then(result => setCars(result))
    //         .catch(err => console.log(err))
    //         .finally(() => setIsLoading(false));
    // }, []);

    

    return (
        <section id="catalog-page">

            {isLoading && <Spinner />}

            <div className="logo-car">                
                <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mazda-6-my19-index-1.png" alt="logo"/>
                {/* <Link to={`/cars/${cars._id}`} className="assistants-button">Car Info</Link> */}
                <h1>List of cars IVAN:</h1>               
            </div>

            
            {cars.map(car => (
                <CarListItem key={car._idc} {...car} />
            ))}

            {cars.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}