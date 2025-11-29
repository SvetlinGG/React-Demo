import About from "../components/About"
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeaderArea from "../components/HeaderArea"
import Pricing from "../components/Pricing"
import Services from "../components/Services"


function App() {
  return (
    <>
  <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
  {/* ***** Preloader End ***** */}
  {/* ***** Header Area Start ***** */}
  <Header />
  {/* ***** Header Area End ***** */}
  <HeaderArea />
  <Banner />
  <Services />
  <About />
  <Clients />
  <Pricing />
  <Footer />
</>

  )
}

export default App
