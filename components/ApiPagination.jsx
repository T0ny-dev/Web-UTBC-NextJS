"use client"
import "./ApiPagination.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";

const ApiSupabase = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Cantidad de resultados por página

  useEffect(() => {
    fetchData();
  }, [currentPage]); // El efecto se dispara cada vez que currentPage cambia

  const fetchData = async () => {
    try {
      // Realizamos una solicitud GET a la API de Supabase para obtener los datos
      const response = await axios.get(
        'https://qxztypvwedaskoflnbno.supabase.co/rest/v1/Courses?select=*&offset=' + ((currentPage - 1) * itemsPerPage) + '&limit=' + itemsPerPage,
        {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4enR5cHZ3ZWRhc2tvZmxuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMzAzNzQsImV4cCI6MjAwNTgwNjM3NH0.Hnr34PnWQkWQKZGIO3WA_KMtekiRJTxxkqdPKZMdjDI',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4enR5cHZ3ZWRhc2tvZmxuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMzAzNzQsImV4cCI6MjAwNTgwNjM3NH0.Hnr34PnWQkWQKZGIO3WA_KMtekiRJTxxkqdPKZMdjDI',
          },
        }
      );
      // Almacenamos los datos en el estado 'data'
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  return (
    <div className='Courses'>
      <p>OFERTA EDUCATIVA 2023</p>
      <h2>Especialízate en las <span>habilidades</span> con demanda</h2>
      <div className="Courses__content">
        {data.map((item) => (
            <div key={item.id} className="Course__box" >
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <div>
                <span id="category">{item.Categoría}</span>
                <span>{item.modalidad}</span>
              </div>
              <p>{item.objetivogeneral}</p>
              <div className="Course__button">
                <Link href={`/cursos/${item.id}`}>
                  <button className="button__second__course"> Mas informacion </button>
                </Link>
              </div>
            </div>
          // Reemplaza 'name' con el nombre de la columna que deseas mostrar
        ))}
      </div>
      <div className="Courses__pagination">
        {/* Botones de paginación */}
        <button className="button__pagination"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/arrowl.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvYXJyb3dsLnN2ZyIsImlhdCI6MTY5NTUyMjE0OSwiZXhwIjoxNzI3MDU4MTQ5fQ.MxRCP7AwPD_PAI1GIw4lVGhTRKdzrknaBkZgDO9Qwq0&t=2023-09-24T02%3A22%3A29.245Z" alt="" />
        </button>
        <button className="button__pagination"
          onClick={() => {
            if (data.length === itemsPerPage) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/arrowr.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvYXJyb3dyLnN2ZyIsImlhdCI6MTY5NTUyMjM1OCwiZXhwIjoxNzI3MDU4MzU4fQ.qti7tWc0hAhyiwwNyjO0__hlR9pd78ft7byPFX4ANEg&t=2023-09-24T02%3A25%3A58.950Z" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ApiSupabase;
