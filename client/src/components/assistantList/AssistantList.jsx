import { useEffect, useState } from 'react';
import { useContext } from 'react';

import * as assistantService from '../../services/assistantService.js';
// import * as carService from '../../services/carService.js';

import AssistantListItem from './assistantItem/AssistantListItem.jsx';
// import CarListItem from '../carList/carItem/CarListItem.jsx';
// import { Link } from "react-router-dom";

import Spinner from "../../utils/Spinner.jsx";



export default function AssistantList() {
    const [assistants, setAssistants] = useState([]);
    // const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    const {
            username,
            isAuthenticated,
            
        } = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);

        assistantService.getAll()
            .then(result => setAssistants(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    // useEffect(() => {
    //     setIsLoading(true);

    //     carService.getAll()
    //         .then(result => setCars(result))
    //         .catch(err => console.log(err))
    //         .finally(() => setIsLoading(false));
    // }, []);
    

    return (
        <section id="catalog-page">

            {isLoading && <Spinner />}

            <div className="logo-car">                
                <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mazda-6-my19-index-1.png" alt="logo"/>
                {/* <Link to={`/cars/${cars._idC}`} className="assistants-button">Car Info</Link> */}
                {/* <CarListItem /> */}

            {/* {cars.map(car => (
                <CarListItem key={car._idC} {...car} />
            ))} */}

                <h1>List of car maintenance:</h1>               
            </div>

            
            {assistants.map(assistant => (
                <AssistantListItem key={assistant._id} {...assistant} />
            ))}

            {assistants.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}
