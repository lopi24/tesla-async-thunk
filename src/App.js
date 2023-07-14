import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./features/shop/shop-page/Shop";
import Charging from "./features/shop/category-page/charging/Charging";
import VehicleAccessories from "./features/shop/category-page/vehicle-accessories/VehicleAccessories";
import Apparel from "./features/shop/category-page/apparel/Apparel";
import Lifestyle from "./features/shop/category-page/lifestyle/Lifestyle";
import Cart from "./features/shop/cart-page/Cart";
import ProductList from "./features/products/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />

        <Route path="cart" element={<Cart />} />

        <Route path="category">
          <Route path=":categoryType" element={<ProductList />} />
          {/* <Route path="charging" element={<Charging />} />
          <Route path="vehicle_accessories" element={<VehicleAccessories />} />
          <Route path="apparel" element={<Apparel />} />
          <Route path="lifestyle" element={<Lifestyle />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
