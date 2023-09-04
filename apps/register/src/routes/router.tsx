import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../features/error/ErrorBoundary";
import OshinagakiScreen from "../features/products/OshinagakiScreen";
import ProductDetailScreen from "../features/products/ProductDetailScreen";
import ProductsScreen from "../features/products/ProductsScreen";
import RegisterScreen from "../features/register/RegisterScreen";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={"register"} replace={true} />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "register",
        element: <RegisterScreen />,
      },
      {
        path: "products",
        element: <ProductsScreen />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailScreen />,
      },
      {
        path: "oshinagaki",
        element: <OshinagakiScreen />,
      },
    ],
  },
]);

export default router;
