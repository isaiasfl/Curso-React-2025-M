import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateProductPage from "../pages/CreateProductPage";
import EditProductPage from "../pages/EditProductPage";
import DeleteProductPage from "../pages/DeleteProductPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      // rutas públicas
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },
          {
            path: ":id",
            element: <ProductDetailPage />,
          },
          {
            path: "new",
            element: (
              <ProtectedRoute>
                <CreateProductPage />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/edit",
            element: (
              <ProtectedRoute>
                <EditProductPage />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/delete",
            element: (
              <ProtectedRoute>
                <DeleteProductPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  {},
]);
