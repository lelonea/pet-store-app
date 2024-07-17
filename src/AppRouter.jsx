import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Category from "./pages/Category/Category.jsx";

const AppRouter = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route path="home" element={<div>Home</div>} />

                  <Route path="categories" element={<div>Categories</div>} />
                  <Route path="categories/:categoryId" element={<Category />} />

                  <Route path="products" element={<div>Products</div>} />
                  <Route path="products/:productId" element={<div>Product</div>} />

                  <Route path="*" element={<div>Not Found</div>} />
              </Route>
          </Routes>
      </BrowserRouter>
    );
}

export default AppRouter;