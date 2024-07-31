import React from 'react';
import Gloves from "../../images/Gloves.jpg" 

//Define y exporta el componente Header
export const Header = () => {
    return (
        //Envuelve el contenido del encabezado
        <header> 
            {/*Define un enlace*/}
            <a href = "#"> 
                <div className= "logo"> {/* Contiene el logo */}
                    <img src={Gloves} alt="logo" width= "100"/>
                </div> 
            </a>
            {/*Lista para los enlaces de navegación*/}
            <ul>
                <li>
                    <a href= "#">INICIO</a>
                </li>
                <li>
                    <a href= "#">PRODUCTOS</a>
                </li>
            </ul>
            <div className= "cart"> {/*Contiene el icono del carrito*/}
                <box-icon name= "cart"></box-icon>
                <span className= "item_total">0</span> {/*Muestra la cantidad de elementos en el carrito*/}
            </div>
        </header>
    )
}
