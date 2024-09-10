import { useEffect, useState } from 'react';

import * as assistantService from '../../services/assistantService.js';
import AssistantListItem from './assistantItem/AssistantListItem.jsx';

import Spinner from "../../utils/Spinner.jsx";


export default function AssistantList() {
    const [assistants, setAssistants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        assistantService.getAll()
            .then(result => setAssistants(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <section id="catalog-page">

            {isLoading && <Spinner />}

            <div className="logo-car">
                
                <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mazda-6-my19-index-1.png" alt="logo"/>
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
