import { useNavigate } from 'react-router-dom';

// import { Dropdown } from "../dropdown/Dropdown.jsx";

import * as carService from '../../services/carService';

export default function CarCreate() {
    const navigate = useNavigate();

    // const options = [
    //     { label: "LPG", value: "LPG" },
    //     { label: "Gasoline", value: "Gasoline" },
    //     { label: "Diesel", value: "Diesel" },
    //     { label: "Electric", value: "Electric" }
    //   ];

   
    //   const handleSelect = (selectedOption) => {
    //     console.log("Selected option:", selectedOption);
    //   };

    
    
    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.create(carData);

            navigate('/cars');
        } catch (error) {
            // Error notification
            console.log(error);
            console.error("Error during registration:", error);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createCarSubmitHandler}>
                <div className="container">
                    <h1>Add new Car model</h1>
                    <label htmlFor="leg-name">Car model:</label>
                    <input type="text" id="name" name="name" placeholder="Enter car model...(required)" required/>

                    <label htmlFor="plate">Plate:</label>
                    <input type="text" id="plate" name="plate" placeholder="Enter your car plate...(required)" required/>

                    <label htmlFor="owner">Owner:</label>
                    <input type="text" id="owner" name="owner" placeholder="Enter owner name...(required)" required/>

                    <label htmlFor="dateInit">Initial date:</label>
                    <input type="text"  id="dateInit" name="dateInit" placeholder="Enter initial date of car..."/>

                    <label htmlFor="distance">Distance:</label>
                    <input type="text" id="distance" name="distance" placeholder="Enter your car distance" />

                    <label htmlFor="hotel-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="description">Short description:</label>
                    <textarea name="description" id="description" placeholder="Write some description of your car...(required)" required></textarea> 

                    {/* <label htmlFor="engine">Type engine:</label>
                    <input type="text" id="engine.label" name="engine" placeholder={engine}/> */}
                    {/* <label htmlFor="engine">engine:</label>
                    <textarea name="engine" id="engine" placeholder={engine.label} required></textarea>  */}

                        {/* <div className="App">
                            <h1>Dropdown Menu Example</h1>
                            <Dropdown options={options} onSelect={handleSelect} />
                        </div>            */}

                
                    <input className="btn submit" type="submit" value="Create" />
                </div>
            </form>
        </section>
    );
}


{/* <div>

<label>

Please choose engine type: 

<select>

    <option value="diesel">Diesel</option>

    <option value="gasoline">Gasoline</option>

    <option value="lpg">LPG</option>

    <option value="electric">Electric</option>

</select>

</label>

</div>  */}


{/* <select>
<option value='Select engine'>--Select engine--</option>
{engines.map((engine) => (
<option value={engine.value}>{engine.label}</option>
))}

</select> */}