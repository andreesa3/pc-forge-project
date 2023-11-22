import CallToAction from "../components/home-components/CallToAction";
import Exclusive from "../components/home-components/Exclusive";
// import FAQ from "../components/FAQ";
import Hero from "../components/home-components/Hero";
import Services from "../components/home-components/Services";
import FAQ from "../components/home-components/FAQ";
import CarouselComponent from "../components/home-components/CarouselComponent";


const Home = () => {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Slider */}
      <CarouselComponent />

      {/* PC */}
      <Exclusive />

      {/* Services */}
      <Services/>

      {/* CallToAction */}
      <CallToAction />

      {/* FAQ */}
      <FAQ />
    </>
  );
};

export default Home;
