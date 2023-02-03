import './CardInfo.css'


import React from 'react';

const CardInfo = (props) => {
    return(
        <div className='contenedorInfo'> {/*div para mostrar datos adicionales de las fotos*/ }

        <p>Camara utilizada: {props.camara!=null? props.camara:`No hay info sobre la camara utilizada`}</p>
        <p>Ubicacion: {props.locacion!=null? props.locacion:`no hay informacion sobre la locacion de la foto`}</p>

        </div>
    )
}

export { CardInfo }