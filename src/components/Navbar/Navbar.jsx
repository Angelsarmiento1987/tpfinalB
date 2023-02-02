
/*creacion del componente Navbar con su input para buscar la imagen */
import './Navbar.css'
import React, { useState } from 'react';
import { Hero } from '../Hero/Hero';

const Navbar = () => {

    const [valor, setValor] = useState(''); //creo la variable VALOR que recibira lo que se escriba en el imput
    const [mostrarResultados, setmostrarResultados] = useState([]) //creo el array mostrarResultados donde se guardaran los datos obtenidps de la api
    const [mostrarResultados2, setmostrarResultados2] = useState([])

    const buscarResultado = async () => {

        const apikey = 'ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8' //cargo apikey 
        const URL = `https://api.unsplash.com/search/photos/?client_id=${apikey}&query=${valor}&per_page=20` //cargo url de la api
        
        
    
        const respuesta = await fetch(URL); //guardo en respuesta la llamada a la api
        const data = await respuesta.json(); //guardo en data la conversion a json 
        setmostrarResultados(data.results) //guardo en mostrarResultados la data
        console.log(data)

       
     }

     const buscarInfoFoto = async (idFoto) => { 

        const URL2 = `https://api.unsplash.com/photos/${idFoto}/?client_id=ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8`

        const respuesta2 = await fetch(URL2); //guardo en respuesta la llamada a la api
        const data2 = await respuesta2.json(); //guardo en data la conversion a json 
        setmostrarResultados2(data2.results) //guardo en mostrarResultados la data
        console.log(data2.exif.model)
       


     }







    return(
        <div className='contGeneral'>
                 <div className='contNav'>
                        <div className='contSecund'>

                             <input className='search' type="text" placeholder='Search Image' onChange={e=> setValor(e.target.value)} />
                             <button onClick={()=>buscarResultado()} className='btn'> Search </button>

                        </div>
               
               
            
                </div>

                <div className='seccionFotos'>
                        <div className='contImagenes'>
                        {
                        mostrarResultados.map((elemento, indice) =>{//deberia ir aca la funcion q cargue por id la api

                              




                            return(






                                 <div className='contenedorImagen'>
                                     <img className='imgTamaño' src= {elemento.urls.regular} alt="" />
                                    <button onClick={()=>buscarInfoFoto(elemento.id)}>Mas info</button> {/*boton q llama la funcion buscarinfofoto y le paso como parametro el identificador de la foto*/}

                                     <p>{elemento.user.location}</p>
                                    <p>{elemento.id}</p>
                                    
                                   
                            
                              
                                     <p>{elemento.tags[0].title}</p> 
                                    <p>{elemento.tags[1].title}</p>
                                    <p>{elemento.tags[2].title}</p>
                             

                                </div>
                                )  })  }
                      
     
                      </div>
                      </div>
                      </div>
                        )                                            
                        }
                        

                        export { Navbar }


                 

           



              

       
   

