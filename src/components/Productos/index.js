import React from 'react';
import IMG from "../../images/Gloves.jpg";

export const ProductosLista = () => {
    return (
        <>
        <h1 className= "title">PRODUCTOS</h1>
        <div className= "productos">
            <a href = "#">
            <div className= "productos">
                <img src = {IMG} alt= ""/> 
            </div> 
            </a>
            <div className= "producto_footer">
                <h1>Title</h1>
                <p>Categoria</p>
                <p className= "price">$100000</p>
            </div>
            <div className= "button">
                <button className= "boton">
                    Añadir al carrito
                </button>
                <a href = "#" className= "boton">Vista</a>
            </div>  
        </div>
        </>

    )
}