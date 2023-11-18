import CallToAction from "../components/home-components/CallToAction";
import Exclusive from "../components/home-components/Exclusive";
// import FAQ from "../components/FAQ";
import Hero from "../components/home-components/Hero"
import Services from "../components/home-components/Services";
import FAQ from "../components/home-components/FAQ";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Slider */}

      {/* PC */}
      <Exclusive />

      {/* Slider */}
      <CallToAction />

      {/* Services */}
      <Services />

      {/* FAQ */}
      <FAQ />
    </>
  );
};

export default Home;
