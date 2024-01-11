import HomeSlider from "./HomeSlider";
import ImageWithTextRight from "./ImageWithTextRight";

import ProductosDestacados from "./ProductosDestacados";
import image2 from '../assets/image2.jpg';
import Banners from "./Banners";


import './Home.css'
import InfoSlider from "./InfoSlider";


function Home() {




    return (
        <div className="home-container">
            <div >
                <HomeSlider />
            </div>
            <Banners />
        

            <InfoSlider />
        




            <ProductosDestacados />

        </div>

    );
}


export default Home;




