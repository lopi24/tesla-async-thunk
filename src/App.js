import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./features/shop/Shop";
import Cart from "./features/cart/Cart";
import CategoryPage from "./features/category/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />

        <Route path="cart" element={<Cart />} />

        <Route path="category">
          <Route path=":categoryType" element={<CategoryPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
