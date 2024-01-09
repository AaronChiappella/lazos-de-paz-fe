import HomeSlider from "./HomeSlider";
import ImageWithTextRight from "./ImageWithTextRight";

import ProductosDestacados from "./ProductosDestacados";
import image2 from '../assets/image2.jpg';
import Banners from "./Banners";

import './Home.css'

function Home() {




    return (
        <div className="home-container">
            <div >
                <HomeSlider />
            </div>
       <Banners />


            <ImageWithTextRight
                imageUrl={image2}
                caption="Quienes somos"
                heading="Lazos de paz"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit netus, nullam volutpat quam auctor neque odio urna fames in, sed mattis potenti egestas ante et cum."
            />
         




            <ProductosDestacados />


        </div>

    );
}


export default Home;




