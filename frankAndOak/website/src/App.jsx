import './App.css';
import Banner from './Components/Banner';
import BetterLiving from './Components/BetterLiving';
import FeatureCat from './Components/FeatureCat';
import Footer from './Components/Footer';
import Mens_Women from './Components/Mens_Women';
import Nav from './Components/Nav';
import Review from './Components/Review';
import Trench from './Components/Trench';


function App() {

  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Nav />
        <main>
          <Banner />
          <FeatureCat />
          <Mens_Women />
          <Trench />
          <Review/>
          <BetterLiving />
        </main>
        <Footer />
      </div>


    </>
  )
}

export default App
