import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Services from '../components/Services';
import AddOns from '../components/AddOns';
import Management from '../components/Management';
import Testimonials from '../components/Testimonials';
import BottomCTA from '../components/BottomCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <AddOns />
      <Management />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </>
  );
}
