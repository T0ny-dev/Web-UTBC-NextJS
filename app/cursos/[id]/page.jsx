"use client"

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./coursePage.css"
import NavbarMobile from '@/components/NavbarMobile';
import DoubleCourse from '@/components/DobleCourse';
import Banner from '@/components/Banner';
import Calendar from '@/components/Calendar';
 
export default function Id () {
  const params = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    try {
      // Realizamos una solicitud GET a la API de Supabase con los headers especificados
      const response = await axios.get(
        `https://qxztypvwedaskoflnbno.supabase.co/rest/v1/Courses?id=eq.${params.id}`,
        {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4enR5cHZ3ZWRhc2tvZmxuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMzAzNzQsImV4cCI6MjAwNTgwNjM3NH0.Hnr34PnWQkWQKZGIO3WA_KMtekiRJTxxkqdPKZMdjDI',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4enR5cHZ3ZWRhc2tvZmxuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMzAzNzQsImV4cCI6MjAwNTgwNjM3NH0.Hnr34PnWQkWQKZGIO3WA_KMtekiRJTxxkqdPKZMdjDI',
          },
        }
      );

      setData(response.data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  
  console.log(data.map((item) => item.name));
 
  return (
    <div>
      <NavbarMobile/>
      <Navbar/>
      <div className='bread'>
        <Link href="/cursos" className='bread__link'> 
          cursos ◄
        </Link>
        {data.map((item) => (<p key={item.id}>{item.name}</p>))}
      </div>
      {data.map((item) => (
        <div key={item.id} className='hero__course'>
          <div  className="hero__course__content">
            <span>{item.Categoría}</span>
            <h3>{item.name}</h3>
            <p>{item.objetivogeneral}</p>
            <a href="https://share.hsforms.com/1usHgvYTDQ7-tDF67c15XKwq1sw0" target={"_blank"}><button className='Button__inscription'>Incribete aqui</button></a>
          </div>
          <div className='hero_course__image'>
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
      <div className='Information__course'>
        {
          data.map((item)=> (
            <div key={item.id} className='information__content__box'>
              <div className='Information__box'>
                <div className='information__title'>
                  <img src={item.iconclock} alt="" />
                  <p>Duración</p>
                </div>
                <p id='hour'>{item.duracion}</p>
              </div>
              <div className='Information__box'>
                <div className='information__title'>
                  <img src={item.iconcert} alt="" />
                  <p>Certificados</p>
                </div>
                <p id='hour'>{item.numerocert}</p>
              </div>
              <div className='Information__box'>
                <div className='information__title'>
                  <img src={item.icondificult} alt="" />
                  <p>Nivel</p>
                </div>
                <p id='dificult'>{item.dificultad}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='Content__topics'>
      {data.map((item) => (
        <div key={item.id} className="Content__all">
          {Object.keys(item.content).map((courseName) => (
            <div key={courseName}>
              <h3>Contenido</h3>
                {item.content[courseName].map((topic, index) => (
                  <div key={index} className="content__file">
                    <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/Course%20image/modulo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb3Vyc2UgaW1hZ2UvbW9kdWxvLnN2ZyIsImlhdCI6MTY5MzkzODU4MywiZXhwIjoyMDA5Mjk4NTgzfQ.aqiBx1u8R0KXk7kB285-AKYPIRfRRSlpOdCqcROtb4k" alt="" />
                    <p>{topic}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
            <div className='Brosure__button'>
        {data.map((item)=> (
          <a key={item.id} href={item.syllabus} target="_blank">
            <button className='Button__inscription'>Descargar broshure</button>
          </a>
        ))}
      </div>
      </div>
      <DoubleCourse/>
      <Banner/>
      <Calendar/>
      <Footer/>
    </div>
  )
}



  

