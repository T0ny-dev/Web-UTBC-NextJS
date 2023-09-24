"use client"

import "./Calendar.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Calendar() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Cantidad de resultados por página
  const [hasMorePages, setHasMorePages] = useState(true); // Estado para habilitar/deshabilitar el botón siguiente

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      // Realizamos una solicitud GET a la API de Supabase para obtener los datos
      const response = await axios.get(
        'https://qxztypvwedaskoflnbno.supabase.co/rest/v1/calendar?select=*&offset=' + ((currentPage - 1) * itemsPerPage) + '&limit=' + itemsPerPage,
        {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4enR5cHZ3ZWRhc2tvZmxuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMzAzNzQsImV4cCI6MjAwNTgwNjM3NH0.Hnr34PnWQkWQKZGIO3WA_KMtekiRJTxxkqdPKZMdjDI', // Tu clave API
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4enR5cHZ3ZWRhc2tvZmxuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMzAzNzQsImV4cCI6MjAwNTgwNjM3NH0.Hnr34PnWQkWQKZGIO3WA_KMtekiRJTxxkqdPKZMdjDI', // Tu token de autorización
          },
        }
      );
      // Almacenamos los datos en el estado 'data'
      setData(response.data);

      // Verificamos si hay más resultados en la siguiente página
      if (response.data.length < itemsPerPage) {
        setHasMorePages(false);
      } else {
        setHasMorePages(true);
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  return (
    <div className='Courses__all'>
      <p>COMIENZA A APRENDER</p>
      <h2>Próximas aperturas <span>calendario</span> 2023</h2>
      <div className="Courses__content__all">
        {data.map((item) => (
          <div key={item.id} className="Course__box__all" >
            <div className="course__content__title">
              <h3>{item.name}</h3>
              <div>
                <span id="category">{item.category}</span>
                <span>{item.modalidad}</span>
              </div>
              <p>{item.fecha}</p>
            </div>
            <div className="Courses__buttons">
              <a href={item.link}>
                <button className="button__second"> Más información </button>
              </a>
              <a href={item.form} target="_blank"><button className="button__second"> Contactar asesor </button></a>
            </div>
          </div>
        ))}
      </div>
      <div className="Courses__pagination">
        {/* Botones de paginación */}
        <button
          className="button__pagination"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/arrowl.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvYXJyb3dsLnN2ZyIsImlhdCI6MTY5NTUyMjM5NSwiZXhwIjoxNzI3MDU4Mzk1fQ.3LqWAynmzSXpC8jBpNkVtgMLwukBAfnD-El9-Zz3qmE&t=2023-09-24T02%3A26%3A35.290Z" alt="" />
        </button>
        <button
          className="button__pagination"
          onClick={() => {
            if (hasMorePages) { // Verificar si hay más resultados en la siguiente página
              setCurrentPage(currentPage + 1);
            }
          }}
          disabled={!hasMorePages} // Deshabilitar el botón si no hay más resultados
        >
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/arrowr.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvYXJyb3dyLnN2ZyIsImlhdCI6MTY5NTUyMjM1OCwiZXhwIjoxNzI3MDU4MzU4fQ.qti7tWc0hAhyiwwNyjO0__hlR9pd78ft7byPFX4ANEg&t=2023-09-24T02%3A25%3A58.950Z" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Calendar;
