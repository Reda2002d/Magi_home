import BestProduct from "../../Components/BestProduct/BestProduct";
import Hero from "../../Components/Hero/Hero";
import NavBar from "../../Components/NavBar/NavBar";
import NosPoints from "../../Components/NosPoints/NosPoints";



export default function Home() {
    return (
        <div className="home-page">
            <NavBar />
            <Hero />
            <BestProduct />
            <NosPoints />
        </div>
    )
}