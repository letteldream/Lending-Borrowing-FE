import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const routes = [
  { path: "/", component: lazy(() => import("pages/Borrow")) },
  {
    path: "/borrow",
    component: lazy(() => import("pages/Borrow")),
  },
  {
    path: "/borrow-detail/:symbol",
    component: lazy(() => import("pages/BorrowDetail")),
  },

  { path: "/farm", component: lazy(() => import("pages/Farm")) },
  {
    path: "/farm-detail/:symbol",
    component: lazy(() => import("pages/FarmDetail")),
  },
  { path: "/stake", component: lazy(() => import("pages/Stake")) },
  // { path: "/metamask", component: lazy(() => import("pages/Metamask")) },
];

function ComposeRoutes() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        {routes.map(({ component, path }, i) => {
          const PageComponent = component;
          return <Route key={i} path={path} element={<PageComponent />} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default ComposeRoutes;
export { ComposeRoutes };
