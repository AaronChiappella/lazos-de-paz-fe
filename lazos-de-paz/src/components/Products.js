import ImagenCabcera from "./ImagenCabecera";
import Cards from "./Cards";
import Filters from "./Filters";
import Breadcrumb from 'react-bootstrap/Breadcrumb';







function Products() {




  return (
    <>
     {/*  <div>
        <ImagenCabcera texto="Productos" />

      </div> */}
      <div className="p-3">
      <Breadcrumb>
        <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>



        <Breadcrumb.Item active>Productos</Breadcrumb.Item>
      </Breadcrumb>
      </div>
      <div className=" d-flex">

        <Filters />
        <Cards />


      </div>


    </>
  );


}

export default Products;