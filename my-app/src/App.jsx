import Banner from "./components/Banner";
import CitiesWithFood from "./components/CitiesWithFood";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";

const App = () => {
  return (
    <>
    <Header></Header>
    <RestaurantList></RestaurantList>
    <Banner></Banner>
    <CitiesWithFood></CitiesWithFood>
    <Footer></Footer>
    </>
  )
}

export default App
