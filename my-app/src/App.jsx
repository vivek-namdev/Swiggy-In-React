import Dineoption from "./components/Dineoption"
import FoodOption from "./components/FoodOption"
import GroceryOption from "./components/GroceryOption"
import Header from "./components/Header"
import Banner from "./components/Banner"
import CitiesWithFood from "./components/CitiesWithFood"
import CitiesWithGrocery from "./components/CitiesWithGrocery"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header></Header>
      <FoodOption></FoodOption>
      <GroceryOption></GroceryOption>
      <Dineoption></Dineoption>
      <Banner></Banner>
      <CitiesWithFood></CitiesWithFood>
      <CitiesWithGrocery></CitiesWithGrocery>
      <Footer></Footer>
    </>
  )
}

export default App
