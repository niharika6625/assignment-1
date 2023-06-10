import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CustomerPage from "../pages/CustomerPage";
import ContractPage from "../pages/ContractPage";
import Layout from "../components/Layout";
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/customer",
      element: (
        <Layout>
          <CustomerPage />
        </Layout>
      ),
    },
    {
      path: "/contract",
      element: (
        <Layout>
          <ContractPage />
        </Layout>
      ),
    },
  ],
  { basename: "/assignment-1" }
);

export default routes;
