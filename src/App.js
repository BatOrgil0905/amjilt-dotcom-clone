import './App.css';
import Header from './components/Header';
// import { SwiperCompany } from './components/Swiper';
import MainSwiper from './components/MainSwiper';
import SectionOne from "./components/sections/SectionOne";
import SectionTwo from "./components/sections/SectionTwo";
import { BannerOne } from './components/BackgroundImages';
import { BannerTextTwo } from './components/RandomText';
import SectionThree from "./components/sections/SectionThree";
import SectionFour from './components/sections/SectionFour';
import SectionFive from './components/sections/SectionFive';
import SectionSix from './components/sections/SectionSix';
import SectionSeven from './components/sections/SectionSeven';
import { BannerTwo } from './components/BackgroundImages';
import SectionEight from './components/sections/SectionEight';
import SectionNine from './components/sections/SectionNine';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainSwiper />
      <SectionOne />
      <SectionTwo />
      <BannerOne />
      <BannerTextTwo/>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <BannerTwo />
      <SectionEight />
      <SectionNine />
      <Footer />
    </>
  );
}

export default App;
