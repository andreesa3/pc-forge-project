// import FAQ from "../components/FAQ";
import Hero from "../components/home-components/Hero"
import Services from "../components/home-components/Services";
import FAQ from "../components/home-components/FAQ";
import CarouselCard from "../components/cards/CarouselCard";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Slider */}

      {/* PC */}
      <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price='1999,98€'/>
      {/* Services */}
      <Services/>

      {/* FAQ */}
      <FAQ />
    </>
  )
}

export default Home;

