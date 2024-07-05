import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
