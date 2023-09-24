"use client"
import "./Cardbox.css"
import React, { useState } from "react";

// Datos de ejemplo (puedes reemplazar esto con tus propios datos)
const cardData = [
  { title: "Diplomado Toma de desiciones", description: "Universidad Tamaulipeca", fecha :"25 Septimbre 2023", logo:"https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/logout.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbG9nb3V0LnBuZyIsImlhdCI6MTY5NDIzMjQwNCwiZXhwIjoxNzI1NzY4NDA0fQ.Q1uRx0uBnw8yZGS01xlSrD_VLB3h0RSIMzmdjmsLRSk&t=2023-09-09T04%3A06%3A44.899Z", modalidad:"Mixta", ubicado:"Reynosa, Matamoros, Rio Bravo" },
  { title: "Diplomado Capacitacion Docente", description: "Universidad Tamaulipeca", fecha :"25 Septimbre 2023", logo:"https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/logout.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbG9nb3V0LnBuZyIsImlhdCI6MTY5NDIzMjQwNCwiZXhwIjoxNzI1NzY4NDA0fQ.Q1uRx0uBnw8yZGS01xlSrD_VLB3h0RSIMzmdjmsLRSk&t=2023-09-09T04%3A06%3A44.899Z", modalidad:"Mixta", ubicado:"Reynosa, Matamoros, Rio Bravo" },
  { title: "Diplomado Justicia para Adolecentes", description: "Universidad Tamaulipeca", fecha :"25 Septimbre 2023", logo:"https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/logout.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbG9nb3V0LnBuZyIsImlhdCI6MTY5NDIzMjQwNCwiZXhwIjoxNzI1NzY4NDA0fQ.Q1uRx0uBnw8yZGS01xlSrD_VLB3h0RSIMzmdjmsLRSk&t=2023-09-09T04%3A06%3A44.899Z", modalidad:"Mixta", ubicado:"Reynosa, Matamoros, Rio Bravo" },
  // Agrega más tarjetas según sea necesario
];

function CardBox() {
  const cardsPerPage = 3; // Número de tarjetas por página
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(cardData.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Card__content">
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Anterior
        </button>
      </div>
      <div className="card-container">
        {currentCards.map((card, index) => (
          <div key={index} className="card">
            <div>
              <div className="card__date">
                <p>Abierta hasta {card.fecha}</p>
              </div>
            </div>
            <h2>{card.title}</h2>
            <div className="card__logo">
              <img src={card.logo} alt="" />
            </div>
            <p>{card.fecha}</p>
            <p>{card.modalidad}</p>
            <p>{card.ubicado}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(cardData.length / cardsPerPage) - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default CardBox;
