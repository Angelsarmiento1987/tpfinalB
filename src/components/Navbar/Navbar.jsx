
/*creacion del componente Navbar con su input para buscar la imagen */
import './Navbar.css'
import React, { useEffect, useState } from 'react';
import { Hero } from '../Hero/Hero';
import { CardInfo } from '../CardInfo/CardInfo';
import InfiniteScroll from "react-infinite-scroll-component"


const Navbar = () => {

    const [valor, setValor] = useState(''); //creo la variable VALOR que recibira lo que se escriba en el imput
    const [mostrarResultados, setmostrarResultados] = useState([]) //creo el array mostrarResultados donde se guardaran los datos obtenidps de la api
    const [mostrarResultados2, setmostrarResultados2] = useState([])
    const[mostrarLocacion,setmostrarLocacion] = useState([])
    const[mostrarDivInfo, setmostrarDivInfo] = useState(false)
    const[idCamara, setIdCamara]= useState()//variable creada para poder mostrar o no mas info en la foto clickeada
     const[page, setPage] = useState(1) //variable para scroll de pagina
     const[valorRender, setValorRender] = useState(1)
     const[mostrarResultados3, setMostrarResultados3] = useState([])

    const buscarResultado = async (valorTag) => {

       

        let consulta = valor //guardo el valor del search en la variable local de esta funcion llamda consulta

        if(valorTag!=null){ //pregunto si el parametro de la funcion es distinto a null que lo cargue en la variable consulta sino que no haga nada
            consulta = valorTag
            
        }
        setValor(consulta)

        console.log("el valor de busqueda es:",consulta)

        //const apikey = 'ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8' //cargo apikey 1ra cuenta 
        const apikey =`pdY10x4pUEmSLho3aKHBA3omst6rQ83qP_WxHymqs40` //apikey 2da cuenta
        const URL = `https://api.unsplash.com/search/photos/?client_id=${apikey}&query=${consulta}&per_page=20` //cargo url de la api
        
        
    
        const respuesta = await fetch(URL); //guardo en respuesta la llamada a la api
        const data = await respuesta.json(); //guardo en data la conversion a json 
        setmostrarResultados(data.results) //guardo en mostrarResultados la data
        console.log(data)

        setmostrarDivInfo(false)//para nuevas busquedas desactivo el contenedor de info
       
     }

     const buscarInfoFoto = async (idFoto) => { 



        const URL2 = `https://api.unsplash.com/photos/${idFoto}/?client_id=ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8`

        const respuesta2 = await fetch(URL2); //guardo en respuesta la llamada a la api
        const data2 = await respuesta2.json(); //guardo en data la conversion a json 
        setmostrarResultados2(data2.exif) //guardo en mostrarResultados la data
        setmostrarLocacion(data2.location)
        console.log(data2)
        setmostrarDivInfo(true) //cuando busco la info de la foto seteo en true para que se muestre el contenedor
        setIdCamara(idFoto)
        
      


     }


     /*funcion para scroll infinito*/
     
     
     useEffect( () =>{
        
        async function cambiarPagina(){
            
        //const apikey = 'ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8' //apikey 1ra cuenta
        const apikey =`pdY10x4pUEmSLho3aKHBA3omst6rQ83qP_WxHymqs40` //apikey 2da cuenta
        const URL = `https://api.unsplash.com/search/photos/?client_id=${apikey}&query=${valor}&per_page=20&page=${page}`
        /*const URL = `https://api.unsplash.com/photos/random/?client_id=ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8`*/
        /*const URL = `https://api.unsplash.com/search/photos/?client_id=ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8&query=gato&per_page=100page=5/`*/
        const respuesta = await fetch(URL);
        const data = await respuesta.json();
        setmostrarResultados((prevResultados)=> prevResultados.concat(data.results)) //concateno los nuevos resultados con los anteriores
        console.log(data)
       console.log(page)
       console.log("elvalor de page es",page)

       

        }

        cambiarPagina()
        

     },[page])


     /*funcion RANDOM*/ 
     
   useEffect(()=>{

    const randomFunc = async () => {
        

        const apikey = 'ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8'
        const URL = `https://api.unsplash.com/photos/random/?client_id=ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8&count=10`
        /*const URL = `https://api.unsplash.com/photos/random/?client_id=ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8`*/
        /*const URL = `https://api.unsplash.com/search/photos/?client_id=ZGkF2bxJelum8E2h6-UzcLmpaa-rp6GX7cwmwiPF9u8&query=gato&per_page=100page=5/`*/
        const respuesta = await fetch(URL);
        const data = await respuesta.json();
        setMostrarResultados3(data)
        console.log(data)
       
        setValorRender(valorRender + 1)
        console.log("el valor de render es de:", valorRender)
        
      
        
    
             }

            randomFunc()


                },[]) //no le paso ningun parametro para que solo se ejecute una vez al iniciar la app





    return(
        <div className='contGeneral'>
                 <div className='contNav'>
                        <div className='contSecund'>

                             <input className='search' type="text" placeholder='Search Image' onChange={e=> setValor(e.target.value)} />
                             <button onClick={()=>buscarResultado()} className='btn'> Search </button>

                        </div>
               
               
            
                </div>
                
               {/*mostrarDivInfo && <CardInfo  camara = {mostrarResultados2.model} locacion={mostrarLocacion.city}/>*/}

                <InfiniteScroll className='scroll' dataLength={mostrarResultados.length} hasMore={true} next={()=> setPage(page + 1)}>


                <div className='seccionFotos'>
                        <div className='contImagenes'>
                        {
                        mostrarResultados.map((elemento, indice) =>{//deberia ir aca la funcion q cargue por id la api

                              




                            return(






                                 <div className='contenedorImagen' id={elemento.id}>


                                     {idCamara!=elemento.id&&<img className='imgTamaño' src= {elemento.urls.regular} alt="" />} {/*cuando el id de la foto que se necesita mas info es distinto a al id del elemento la foto se muestra */}
                                    

                                     
                                     {idCamara==elemento.id&&<p className='contInfo' id={elemento.id}>Camara utilizada: {mostrarResultados2.model!=null?mostrarResultados2.model:`Info no disponible`} <br /> Pais: {mostrarLocacion.country!=null?mostrarLocacion.country:`Info no disponible`} <br />Ciudad: {mostrarLocacion.city!=null?mostrarLocacion.city:`Info no disponible`}</p>} {/*utilizo el operador cortocircuito para indicarle que si el identificador de busqueda de mas info coincide con el del div que lo muestre */}
                                    
                                     <button onClick={()=>buscarInfoFoto(elemento.id)}>Mas info</button> {/*boton q llama la funcion buscarinfofoto y le paso como parametro el identificador de la foto*/}
                                     {/*<p>{elemento.user.location}</p>*/}
                            
                              
                                         <a className='tags' onClick={()=>buscarResultado(elemento.tags[0].title)}  href="#">{elemento.tags[0].title},</a>
                                         <a className='tags' onClick={()=>buscarResultado(elemento.tags[1].title)} href="#">{elemento.tags[1].title},</a>     
                                        <a className='tags' onClick={()=>buscarResultado(elemento.tags[2].title)} href="#">{elemento.tags[2].title}</a>
                             

                                </div>
                                )  })  }
                      
     
                      </div>
                      </div>
                     
                            </InfiniteScroll>



                            {valorRender==2&& //solo se hace visible este render cuando valorRender esta establecido en 2 para darle tiempo a la funcion random a ejecutarse

                                <div className='contRandom'>
                            
                            <div className='contImagenes'>
                {valorRender>1 &&
                mostrarResultados3.map((elemento, indice) =>{
                    return(


                         <div key={elemento.id} className='contenedorImagen'>
                              <img className='imgTamaño' src= {elemento.urls.regular} alt="" />
                              
                            
                              
                           {/* <p>{elemento.tags[0].title}</p> 
                             <p>{elemento.tags[1].title}</p>
                             <p>{elemento.tags[2].title}</p>*/}
                             

                        </div>

                       

                     )


                })


                 }

                 

            </div>
            </div>
     
                            }



                      </div>
                        )                                            
                        }

                        

                        export { Navbar }
                        


                 

           



              

       
   

