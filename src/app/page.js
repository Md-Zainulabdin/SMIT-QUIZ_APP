import Head from "next/head"
import Footer from "./components/footer/page"
import Hero from "./components/hero/page"
import Navbar from "./components/navbar/page"

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="py-4">
        <Hero />
        <Footer/>
      </div>
    </div>
  )
}

export default Home