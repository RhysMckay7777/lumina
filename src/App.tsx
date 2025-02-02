import { useEffect } from "react"
import Achievements from "./components/Achievements"
import Banner from "./components/Banner"
import Case from "./components/Case"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Partner from "./components/Partner"
import Statistics from "./components/Statistics"
import Youtube from "./components/Youtube"
import Team from "./components/team/Team"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from "./components/Testimonial"

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <Partner />
      <Youtube />
      <Achievements />
      <Testimonial/>
      <Case />
      <Statistics />
      <Team />
      <div className="bg-[url('./assets/images/footer.png')] bg-contain bg-bottom bg-no-repeat">
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
