import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CustomerPage from "../pages/CustomerPage";
import ContractPage from "../pages/ContractPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/customer",
    element: <CustomerPage />,
  },
  {
    path: "/contract",
    element: <ContractPage />,
  },
]);

export default routes;
