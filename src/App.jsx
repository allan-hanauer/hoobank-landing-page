import styles from "./style.js";
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Business from './components/Business.jsx'
import Billing from './components/Billing.jsx'
import Button from './components/Button.jsx'
import CarDeal from './components/CarDeal.jsx'
import Clients from './components/Clients.jsx'
import CTA from './components/CTA.jsx'
import FeedbackCard from './components/FeedbackCard.jsx'
import Footer from './components/Footer.jsx'
import GetStarted from './components/GetStarted.jsx'
import Testimonials from './components/Testiomials.jsx'
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden h-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
          Navbar
          </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero/></div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CarDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
          </div>
      </div>
    </div>
  );
}

export default App;
