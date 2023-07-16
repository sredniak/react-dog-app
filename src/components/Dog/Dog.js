import React from 'react';
import "./Dog.css"


//przekazanie danych z komponentu
export default ({ dogImages }) => {
  return (
    
    //wykorzystanie operatora logicznego
    <div>
      {dogImages ? (
        dogImages.map((dog, index) => {
          return <div className=' mt-4 w-70'>
            <img src={dog} key={index} className='doggy' />
            <p className='mt-3'>Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć bywa uparty. Sprawdzi się w zarówno małym mieszkaniu jak i w domu z ogrodem. Wysokość w kłębie 30-35 cm, masa ciała 22-25 kg. Sierść krótka, delikatna, lśniąca. Umaszczenie płowe, pręgowate lub łaciate. Charakter czujny, śmiały, oddany, odwany, łagodny, czasem uparty. W zaleności od dania pokazuje róne oblicza swojej natury.</p>
            </div>;
        })
      ) : (
        <p>Tu zostanie wyświetlonny obrazek</p>
      )}
    </div>
    
    
  );
};
