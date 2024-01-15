import HomeSlider from "./HomeSlider";
import ProductosDestacados from "./ProductosDestacados";
import Banners from "./Banners";
import InfoSlider from "./InfoSlider";


import './Home.css'

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




