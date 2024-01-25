import React from 'react';
import "../component/Service.css";

function Service() {
  const cardData = [
    { id: 1, title: 'Card 1', text: 'Japanese Language Courses N5, N4, N3, N2, N1' },
    { id: 2, title: 'Card 2', text: 'Job Placement Consultation' },
    { id: 3, title: 'Card 3', text: 'Visa Processing after Employment' },
    { id: 4, title: 'Card 4', text: 'On-Site assistance in Japan' },
    { id: 5, title: 'Card 5', text: 'Skill Development Training' },
    { id: 6, title: 'Card 6', text: 'Document Translation in Japanese to English & vice versa' },
    { id: 5, title: 'Card 5', text: 'Some quick example text for Card 5.' },
    { id: 6, title: 'Card 6', text: 'Some quick example text for Card 6.' },
];

  return (
<>
  <div className='card' style={{ marginTop: "10px" }}>
    <div className='card-header'>
      <h1 className="fonts" style={{ color: "red", fontSize: "30px" }}>
        OUR SERVICE
      </h1>
    </div>

    <div className="services-container card overflow-x-auto custom-scrollbar-container" style={{ height: "490px", width: "100%", borderRadius: "0px", display: 'flex', flexWrap: 'wrap' }}>
      {cardData.map((service, index) => (
        <div key={index} className='service-card-container' style={{ marginRight: "10px", marginLeft: "10px" }}>
          <div className='service-card'>
            <h1 className='service-header' style={{ color: "red" }}>{service.text}</h1>
            <div className='service-description'>
              <h3 className='service-txt fonts'>asdfghe fushdddddddddddddddddsjbsbjiikjxwnjhjiwijeedcewjiwhiefhidwjdncjsdiciweciuweehchcuiecjiwdcdijwhjehecuiwciwihjdcweiwfeifheu</h3>
            </div>
            <img src="https://mdbootstrap.com/img/Photos/Others/images/16.webp" alt="Card image cap" className="service-image" />
          </div>
        </div>
      ))}
    </div>
  </div>
</>

   
  );
}

export default Service;
