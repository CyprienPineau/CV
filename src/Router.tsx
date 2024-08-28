import CuriculumVitae from "_pages/CuriculumVitae";
import Home from "_pages/Home";
import Portefolio from "_pages/Portefolio";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout isNavBar={false}>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/CV",
    element: (
      <Layout>
        <CuriculumVitae />
      </Layout>
    ),
  },
  {
    path: "/Portefolio",
    element: (
      <Layout>
        <Portefolio />
      </Layout>
    ),
  },
]);

export default router;
