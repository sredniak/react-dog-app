import React from "react";

//przekazanie danych z komponentu
const DogsList = ({dogs}) => {

    return(
        <div>
            <h4 className="fixed-top bg-dark p-3 text-white"><b>Lista ras</b></h4>
            <ul className="bg-dark mt-5 text-secondary">
            {/* wyświetlenie danych w postaci listy */}
            {dogs.map((dog) => <li className='list-group-item mt-1 p-3'>{dog}</li>)}
            </ul>
        </div>
    )
}

export default DogsList;