import Hero from "./components/hero/page"
import Navbar from "./components/navbar/page"

const Home = () => {
  return (
    <div className="w-full h-[90vh]">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home