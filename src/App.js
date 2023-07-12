import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./features/shop/Shop";
import Charging from "./features/shop/page/charging/Charging";
import VehicleAccessories from "./features/shop/page/vehicle-accessories/VehicleAccessories";
import Apparel from "./features/shop/page/apparel/Apparel";
import Lifestyle from "./features/shop/page/lifestyle/Lifestyle";
import Cart from "./features/Heading/utility/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />

        <Route path="cart" element={<Cart />} />

        <Route path="category">
          <Route path="charging" element={<Charging />} />
          <Route path="vehicle_accessories" element={<VehicleAccessories />} />
          <Route path="apparel" element={<Apparel />} />
          <Route path="lifestyle" element={<Lifestyle />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
