import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import ItemStore from "../components/ItemStore"
const UserLayout = () => {
  return (
    <div className="userlayout">
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default UserLayout