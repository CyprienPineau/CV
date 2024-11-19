import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router.js";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <RouterProvider router={router} />
);
