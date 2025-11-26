import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import "./index.css";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </HelmetProvider>
);
