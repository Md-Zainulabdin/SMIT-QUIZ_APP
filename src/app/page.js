import Hero from "./components/hero/page"
import Navbar from "./components/navbar/page"

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="py-4">
        <Hero />
      </div>
    </div>
  )
}

export default Home