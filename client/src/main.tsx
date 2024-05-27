import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ContextProvider from "./context/ContextProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Items from "./components/pages/Items.tsx";
import ItemDetail from "./components/pages/ItemDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/items",
    element: <Items />,
  },
  {
    path: "/item/:id",
    element: <ItemDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
