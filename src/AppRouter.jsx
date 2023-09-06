import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Redux } from "./components/redux";
import { ReduxToolkit } from "./components/reduxToolkit";
import { ReactQuery } from "./components/reactQuery";

const ROUTES = {
  redux: "/redux",
  reduxToolkit: "/redux-toolkit",
  reactQuery: "/react-query",
};

const Navigation = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.redux}>Redux</Link>
        </li>
        <li>
          <Link to={ROUTES.reduxToolkit}>Redux-Toolkit</Link>
        </li>
        <li>
          <Link to={ROUTES.reactQuery}>React Query</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export const AppRouter = () => (
  <BrowserRouter>
    <Navigation />
    <main>
      <Routes>
        <Route index element={<Redux />} />
        <Route path={ROUTES.redux} element={<Redux />} />
        <Route path={ROUTES.reduxToolkit} element={<ReduxToolkit />} />
        <Route path={ROUTES.reactQuery} element={<ReactQuery />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </main>
  </BrowserRouter>
);
