import Hero from "./components/hero/page"
import Navbar from "./components/navbar/page"

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full py-4">
        <Hero />
      </div>
    </div>
  )
}

export default Home