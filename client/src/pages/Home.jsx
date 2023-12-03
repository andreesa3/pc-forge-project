import CallToAction from "../components/home-components/CallToAction";
import Exclusive from "../components/home-components/Exclusive";
// import FAQ from "../components/FAQ";
import Hero from "../components/home-components/Hero";
import AvailableComponent from "../components/home-components/AvailableComponent";
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
      <AvailableComponent/>

      {/* CallToAction */}
      <CallToAction />

      {/* FAQ */}
      <FAQ />
    </>
  );
};

export default Home;
