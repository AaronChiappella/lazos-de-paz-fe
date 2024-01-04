import ImagenCabcera from "./ImagenCabecera";
import Cards from "./Cards";
import Filters from "./Filters";



import React, { useState, useEffect } from 'react';


function Products() {

    


    return (
      <>
      <div>
        <ImagenCabcera texto="Productos"/>

      </div>
      <div className=" d-flex">
      
            <Filters />
            <Cards />


        </div>


        </>
    );


}

export default Products