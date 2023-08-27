import Footer from "./components/footer/page"
import Hero from "./components/hero/page"
import Navbar from "./components/navbar/page"

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <Navbar />
      <div className="w-full h-full bg-image py-12 md:py-0 relative md:absolute left-0 top-0">
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default Home