import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./features/shop/Shop";
import Cart from "./features/cart/Cart";
import CategoryPage from "./features/category/CategoryPage";
import SubCategory from "./features/category/SubCategory";
import ProductDetail from "./features/products/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />

        <Route path="cart" element={<Cart />} />

        <Route path="category">
          <Route path=":categoryType" element={<CategoryPage />} />
          <Route path="apparel/:subCategoryType" element={<SubCategory />} />
        </Route>

        <Route path="product">
          <Route path=":productId" element={<ProductDetail />} />
        </Route>

        {/* create 404 page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
