import HomeSlider from "./HomeSlider";
import ImageWithTextRight from "./ImageWithTextRight";
import ImageWithTextLeft from "./ImageWithTextLeft";
import ProductList from "./ProductsList";
import image2 from '../assets/image2.jpg';
import Banners from "./Banners";
import { Row, Col } from "react-bootstrap";

function Home() {




    return (
        <>
            <div >
                <HomeSlider />
            </div>
       <Banners />


            <ImageWithTextRight
                imageUrl={image2}
                caption="Quienes somos?"
                heading="Lazos de paz"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit netus, nullam volutpat quam auctor neque odio urna fames in, sed mattis potenti egestas ante et cum."
            />
            <ImageWithTextLeft
                imageUrl={image2}
                caption="Que Hacemos?"
                heading="Tejidos de amor"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit netus, nullam volutpat quam auctor neque odio urna fames in, sed mattis potenti egestas ante et cum."
            />




            <ProductList />


        </>

    );
}


export default Home;




