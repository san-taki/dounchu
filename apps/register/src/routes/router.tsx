import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../features/error/ErrorBoundary";

const router = createBrowserRouter(
  [
    {
      path: '',
      errorElement: <ErrorBoundary />
    },
    {
      path: '/',
      errorElement: <ErrorBoundary />,
      children: [

      ]  
    }
  ],
);

export default router;